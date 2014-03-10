# trim-leading-whitespace

Through stream that trims leading whitespace

	npm install trim-leading-whitespace

## Usage

``` js
var trim = require('trim-leading-whitespace');

process.stdin.pipe(trim()).pipe(process.stdout);
```

## License

MIT