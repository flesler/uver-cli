# uver-cli

Update the version on package.json and other files from the command-line

## Use as a library

To update file versions from within your code, check out [uver](https://github.com/flesler/uver)

## Installation

``` bash
$ npm install -g uver-cli
```

## Options

```bash
$ uver --help

  Usage: uver [options]

 Options:

   -h, --help             output usage information
   -p, --patch            Update patch version (default)
   -m, --minor            Update minor version
   -M, --major            Update major version
   -i, --index <number>   Update version on specified index (0 for major)
   -r, --revert           Decrement instead of increment
   -R, --root <path>      Where to look for the source file ($CWD)
   -f, --filename <file>  Filename of the source (package.json)
   -v, --ver <version>    Specify a fixed version
   -s, --silent           Do not output new version to console
   -o, --output [path]    Save file to `path` or output to stdout
```

You can check out the docs on [uver](https://github.com/flesler/uver) for more detail.

## Examples

```bash
# Increment patch version of package.json on current directory
uver
```

```bash
# Increment minor version of bower.json on current directory
uver --minor -f bower.json
```

```bash
# Decrement major version of package.json on current directory
uver --index 0 -r
```

```bash
# Set version to 1.2.3
uver -v 1.2.3
```

```bash
# Pipe to stdout and do something with it
uver -o > package.json.bkp
```
## Why not npm version

Check [uver](https://github.com/flesler/uver)'s docs for an explanation

## LICENSE

The MIT License (MIT)

Copyright (c) 2014 Ariel Flesler

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
