var trim = require('./');
var tap = require('tap');
var startpoint = require('startpoint');
var concat = require('concat-stream');

var test = tap.test;

test('trim leading whitespace', function(t) {
	t.plan(1);
	startpoint(' \r\r\n \t hello')
		.pipe(trim())
		.pipe(concat(function(buffer) {
			t.same(buffer.toString(), 'hello');
		}));
});

test('do not trim other whitespace', function(t) {
	t.plan(1);
	startpoint('hello worldy\nworld')
		.pipe(trim())
		.pipe(concat(function(buffer) {
			t.same(buffer.toString(), 'hello worldy\nworld');
		}));
});