var gulp = require('gulp');

// Add tasks to the gulpfile.
require('require-dir')('./tasks');

gulp.task('doSomething', function() {
    console.log('I do something!');
});
