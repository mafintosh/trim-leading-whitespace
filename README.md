# trim-leading-whitespace

Through stream that trims leading whitespace

	npm install trim-leading-whitespace

[![build status](https://secure.travis-ci.org/mafintosh/trim-leading-whitespace.png)](http://travis-ci.org/mafintosh/trim-leading-whitespace)

## Usage

``` js
var trim = require('trim-leading-whitespace');

process.stdin.pipe(trim()).pipe(process.stdout);
```

## License

MIT