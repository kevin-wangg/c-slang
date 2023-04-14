# c-slang

C sublanguage modified from js-slang.

## Possible Issues (and manual solutions)

* If you failed to execute the `jsdoc.sh` in your bash
  * Delete the first line of jsdoc.sh (for Windows PowerShell) before executing `yarn jsdoc`.
  * Please modify the line break type if `‘bash\r’: No such file or directory`
* `node` should be replaced by `node.exe` if you are using WSL with node.js installed on your Windows.
* In case you meet the same error as [this](https://github.com/jiangmiao/node-getopt/issues/20) when using *node-getopt*, modify the `package.json` of node-getopt as [this PR](https://github.com/jiangmiao/node-getopt/pull/21/commits/05e498731c14b648fa332ca78d3a301c5e4be440) shows.

# Table of Contents

- [Requirements](#requirements)
- [Usage](#usage)
- [Documentation](#documentation)
- [Requirements](#requirements-1)
- [Testing](#testing)
- [Error messages](#error-messages)
- [Using your xx-slang in your local Source Academy](#using-your-xx-slang-in-your-local-source-academy)
- [Talks and Presentations](#talks-and-presentations)
- [License](#license)

# Requirements

- node: known working version: v16.14.0

# Usage

To build,

```{.}
$ git clone https://github.com/kevin-wangg/c-slang
$ cd c-slang
$ yarn
$ yarn build
```

To add \"c-slang\" to your PATH, build it as per the above instructions, then
run

```{.}
$ cd dist
$ npm link
```

If you do not wish to add \"c-slang\" to your PATH, replace \"c-slang\" with
\"node dist/repl/repl.js\" in the following examples.


Usage:
```{.}
Usage: c-slang [PROGRAM_STRING] [OPTION]
  -h, --help            display this help
  -e, --eval            don't show REPL, only display output of evaluation
```

Hint: In `bash` you can take the `PROGRAM_STRING` out of a file as follows:

```{.}
$ c-slang -n -e "$(< my_source_program.js)"
```

# Using your xx-slang in your local Source Academy

(xx is the name of your language)

A common issue when developing modifications to js-slang is how to test it using
your own local frontend. Assume that you have built your own frontend locally,
here is how you can make it use your own xx-slang, instead of the one that the
Source Academy team has deployed to npm.

First, build and link your local xx-slang: (don't forget to modify the "c-slang" in both projects)

```{.}
$ cd xx-slang
$ yarn build
$ yarn link
```

Then, from your local copy of frontend:

```{.}
$ cd frontend
$ yarn link "xx-slang"
```

Then start the frontend and the new js-slang will be used.

# Talks and Presentations

- **How `js-slang` works under the hood** [17th Jan 2023][The
  Gathering][[slides](https://docs.google.com/presentation/d/1GFR39iznBZxWv948zUsmcbCSSDasm4xYs3Jc5GF7A3I/edit?usp=sharing)]

# License

[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
All sources in this repository are licensed under the
[Apache License Version 2][apache2].

[apache2]: https://www.apache.org/licenses/LICENSE-2.0.txt
