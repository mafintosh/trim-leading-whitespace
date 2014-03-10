var through2 = require('through2');

var TAB = '\t'.charCodeAt(0);
var LF = '\n'.charCodeAt(0);
var CR = '\r'.charCodeAt(0);
var SP = ' '.charCodeAt(0);

module.exports = function() {
	var done = false;
	return through2(function(data, enc, cb) {
		if (done) return cb(null, data);
		for (var i = 0; i < data.length; i++) {
			var b = data[i];
			if (TAB === b || LF === b || CR === b || SP === b) continue;
			done = true;
			return cb(null, data.slice(i));
		}
		cb();
	});
};