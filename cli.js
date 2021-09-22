#!/usr/bin/env node
import process from 'node:process';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { Command } from 'commander';
import fsExtra from 'fs-extra';
import { render } from './lib/index.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const { readJsonSync } = fsExtra;
const packageInfo = readJsonSync(resolve(__dirname, 'package.json'));
const program = new Command();

program
  .alias('ge')
  .description(packageInfo.description)
  .argument('<data-file...>', 'data file used to fill the document')
  .requiredOption(
    '-t, --template <file>',
    'template file used to render the document'
  )
  .option('-o, --output <file>', 'output file')
  .version(packageInfo.version)
  .addHelpText(
    'after',
    `
Examples:
  $ geneasy -t template.hbs -o README.md readme.json
  $ geneasy -t template.hbs -o index.html data.yaml
  $ ge -t template.hbs -o /list/index.html data.yaml`
  )
  .showHelpAfterError();

program.parse();
// program.parse(process.argv);

const options = program.opts();
// if (options.template) console.log(`- template: ${options.template}`);
// if (options.output) console.log(`- output: ${options.output}`);
// console.log('Remaining arguments:', program.args);
(async () => {
  try {
    await render(options.template, program.args, options.output);
  } catch (error) {
    console.error(error);
    process.exitCode = 1;
  }
})();
