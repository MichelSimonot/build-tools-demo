var gulp = require('gulp');
var karma = require('karma');
var path = require('path');

/**
 * Test task.
 * Runs unit tests.
 * Uses Karma (https://karma-runner.github.io/) as a test runner.
 * Uses Mocha (https://mochajs.org/) and Sinon-Chai (https://github.com/domenic/sinon-chai)
 * as test frameworks.
 */
gulp.task('test', function(done) {
    new karma.Server({
        // Karma always requires the file be relative to the directory this file is in.
        configFile: path.join(__dirname, '../tests/karma.conf.js'),
        singleRun: true
    }, function() {
        done();
    }).start();
});
