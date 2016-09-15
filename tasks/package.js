var gulp = require('gulp');
var gzip = require('gulp-gzip');
var rename = require('gulp-rename');
var tar = require('gulp-tar');

gulp.task('package', ['lint', 'test', 'build'], function() {

    var files = [
        'dist/index.html',
        'dist/bundle.js',
        'dist/bundle-min.js'
    ];

    // Collect files.
    return gulp.src(files)
        // Package it all up.
        .pipe(tar('package.tar'))
        .pipe(gzip())

        // Name and output the package.
        .pipe(rename('package.tar.gz'))
        .pipe(gulp.dest('dist/'));
});
