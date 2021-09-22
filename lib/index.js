import renderHbs from 'geneasy-handlebars';
import parse from 'geneasy-yaml';
import fsExtra from 'fs-extra';

const { readFile, writeFile } = fsExtra;

export function register() {}
export async function render(template, dataFiles, output) {
  const data = {};
  const contents = await Promise.all(
    dataFiles.map((file) => readFile(file, 'utf-8').then((data) => parse(data)))
  );
  Object.assign(data, ...contents);
  template = await readFile(template, 'utf-8');
  const result = await renderHbs(template, data);
  if (output) {
    await writeFile(output, result);
  } else {
    console.log(result);
  }
}
