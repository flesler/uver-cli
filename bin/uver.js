#!/usr/bin/env node

var program = require('commander'),
	uver = require('uver');

program
	.option('-p, --patch', 'Update patch version (default)')
	.option('-m, --minor', 'Update minor version')
	.option('-M, --major', 'Update major version')
	.option('-i, --index <number>', 'Update version on specified index (0 for major)', parseInt)
	.option('-r, --revert', 'Decrement instead of increment')
	.option('-R, --root <path>', 'Where to look for the source file ($CWD)')
	.option('-f, --filename <file>', 'Filename of the source (package.json)')
	.option('-v, --ver <version>', 'Specify a fixed version')
	.option('-s, --silent', 'Do not output new version to console')
	.option('-o, --output [path]', 'Save file to `path` or output to stdout')
	.parse(process.argv);

// Output specified with no path, output to stdout
if (program.output === true) {
	program.stream = process.stdout;
	program.silent = true;
}
var version = uver(program);
if (!version) {
	process.exit(1);
}
if (!program.silent) {
	console.info(version);
}
process.exit();
