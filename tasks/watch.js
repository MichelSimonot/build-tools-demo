var gulp = require('gulp');

/**
 * Watch task.
 * On file change, runs other tasks.
 */
gulp.task('watch', function() {

    // On source or test change, run lint and test tasks.
    gulp.watch(['src/**.js','tests/**.js'], ['lint', 'test']);

});
