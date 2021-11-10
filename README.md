# geneasy

[![NPM Version][npm-version-image]][npm-url]
[![LICENSE][license-image]][license-url]
[![code style: prettier][code-style-prettier-image]][code-style-prettier-url]

> generate + easy = geneasy = ge

A command line tool that can easily generate HTML, Markdown documents, etc.

## Installation

```sh
npm i -g geneasy
```

## Usage

```sh
Usage: cli|ge [options] <data-file...>

A command line tool that can easily generate HTML, Markdown documents, etc.

Arguments:
  data-file              data file used to fill the document

Options:
  -t, --template <file>  template file used to render the document
  -o, --output <file>    output file
  -V, --version          output the version number
  -h, --help             display help for command

Examples:
  $ geneasy -t template.hbs -o README.md readme.json
  $ geneasy -t template.hbs -o index.html data.yaml
  $ ge -t template.hbs -o /list/index.html data.yaml
```

## Plugins

- [geneasy-yaml](https://github.com/geneasy/geneasy-yaml) - A plugin that enables geneasy to use dafa files in YAML format.
- [geneasy-handlebars](https://github.com/geneasy/geneasy-handlebars) - A plugin that enables geneasy to use the Handlebars templates.

## Related

- [geneasy-links](https://github.com/geneasy/links) - 友情链接模板 - 这是一个通用的友情链接模板，任何类型的网站都可以拿去使用。
- [geneasy-nav](https://github.com/geneasy/nav) - 网址导航模板 - 这是一个通用的网址导航模板，任何类型的网站都可以拿去使用。

## License

Copyright (c) 2021 [Pipecraft][my-url]. Licensed under the [MIT license][license-url].

## >\_

[![Pipecraft](https://img.shields.io/badge/site-pipecraft-brightgreen)](https://www.pipecraft.net)
[![PZWD](https://img.shields.io/badge/site-pzwd-brightgreen)](https://pzwd.net)

[my-url]: https://www.pipecraft.net
[npm-url]: https://www.npmjs.com/package/geneasy
[license-url]: LICENSE
[code-style-prettier-url]: https://github.com/prettier/prettier
[npm-downloads-image]: https://img.shields.io/npm/dm/geneasy
[npm-version-image]: https://img.shields.io/npm/v/geneasy
[license-image]: https://img.shields.io/npm/l/geneasy
[code-style-prettier-image]: https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square
