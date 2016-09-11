/**
 * Configurations for Karma.
 */
module.exports = function(karmaConfig) {
    karmaConfig.set({
        // Run the tests in PhantomJS.
        browsers: ['PhantomJS'],
        // Use frameworks for testing.
        frameworks: ['mocha', 'sinon-chai'],
        // Use a reporter for the results.
        reporters: ['mocha'],
        // Load the files needed for testing.
        files: [].concat(
            './*.spec.js',
            '../src/**.js'
        )
    });
};
