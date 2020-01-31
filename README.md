# fast-date-parse

![Build Status](https://github.com/SerayaEryn/fast-date-parse/workflows/ci/badge.svg)
[![Coverage Status](https://coveralls.io/repos/github/SerayaEryn/fast-date-parse/badge.svg?branch=master)](https://coveralls.io/github/SerayaEryn/fast-date-parse?branch=master)
[![NPM version](https://img.shields.io/npm/v/fast-date-parse.svg?style=flat)](https://www.npmjs.com/package/fast-date-parse)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) [![Greenkeeper badge](https://badges.greenkeeper.io/SerayaEryn/fast-date-parse.svg)](https://greenkeeper.io/)

Performant date parsing.

## Installation

```bash
npm i fast-date-parse
```

## Example

```js
const DateParser = require('fast-date-parse')

const parser = new DateParser('YYYY-MM-DD')

parser.parse('2018-09-02')
```

## Tokens

Supported tokens:

| Token         | Example	           | Description           |
| ------------- | ------------------ |---------------------- |
| YYYY          | `2018`             | Year                  |
| MM            | `01..12`           | Month                 |
| HH            | `00..23`           | Hours (24 hour time)  |
| DD            | `01..31`           | Day of month          |
| mm            | `00..59`           | Minutes               |
| ss            | `00..59`           | Seconds               |
| SSS           | `000..999`         | Milliseconds          |

## API

### DateParser(datePattern)

Creates a new parser.

The parser ignores all non-token characters.

### DateParser#parse(dateString)

Parses the `dateString` and returns a date object.

## Benchmark

```bash
$ node benchmark/benchmark.js
moment x 73,592 ops/sec ±1.75% (90 runs sampled)
fast-date-parse x 1,727,745 ops/sec ±1.09% (87 runs sampled)
fecha x 98,347 ops/sec ±1.74% (84 runs sampled)
Fastest is fast-date-parse
```

## License

[MIT](./LICENSE)
