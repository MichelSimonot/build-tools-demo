# Build Tools Demo

This repository is a demo of build tools using NPM + Gulp. It shows off basic usage of tools used to automate the development workflow. This project **should not** be considered best practices; it was quickly put together to demo the build tools.

## The Project

The project itself is a simple calculator. You enter an equation, it outputs the answer. It was created simply so the build tools had a simple project to act on. Not all operators are supported. (It was originally suppose to output the solution step by step, but it never got that far. And wasn't truly needed for the demo.) You need to run the `serve` task to bring up the interface.

## Build System

It uses [Gulp](http://gulpjs.com/) as a build system. Gulp tasks are defined in the `/tasks` folder for each task listed below. It also shows off:
* Gulp watch: Automate tasks to run on file change. See the `watch.js` task file.
* Task Dependencies: Ensure that dependent tasks for run before the current task. See usage in the `package.js` task file.

To run a task, enter a `gulp <taskName>` command.

## Tasks + Tools

### Linting

[ESLint](http://eslint.org/) is used to perform linting. It finds potential syntax and style issues in your code.

* Linting rules are found in the `.eslintrc.yml` file.

### Testing

Testing is done with [Karma](https://karma-runner.github.io/) as a test runner, and [Mocha](https://mochajs.org/) and [Sinon-Chai](https://github.com/domenic/sinon-chai) as test frameworks. The test frameworks provide functionality used during the tests (such as assertions, mocking, etc.). The test runner manages the configurations used to run the tests (such as browser, frameworks, reporters, etc.).

Mocha is also used a reporter, which generates the test results that are output to the console.

* Test cases are described in the `/tests/*.spec.js` files.
* Test runner config is found in `/tests/karma.conf.js`.

### Build

[Webpack](https://webpack.github.io/) is used as a build tool. It puts together the source code and outputs a bundled build. (Webpack also does a lot of things not shown in this demo.)

* Build config are found in the `build.js` task file.

### Serve

[BrowserSync](https://www.browsersync.io/) is used to serve the built project. It creates a local server and hosts the files in the `/dist` folder. It also outputs a minified version of the bundle, which is done with another tool. (BrowserSync is useful for a number of other reasons not shown off here as well.)

### Package

Package is done with a few tools (they don't have big, fancy names / sites). You can see what they are from the packages `require`'d in the `package.js` task.

The `package.js` task has a few dependency (lint, test, build), which are run before the package task runs.

## Feedback

If there are any questions, problems, feedback of any type, please feel free to open a Github issue to ask / report it.
