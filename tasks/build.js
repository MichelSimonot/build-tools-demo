var gulp = require('gulp');
var webpack = require('webpack-stream');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

var webpackConfig = {
    // Specify our application's entry point.
    entry: './src/calculator.js',

    output: {
        // The build output file's name.
        filename: 'bundle.js',
        // The object name of the build.
        library: 'calculator'
    }
};

gulp.task('build', function() {
    // Run Weback.
    return webpack(webpackConfig)
        // Output the build to the dist folder.
        .pipe(gulp.dest('./dist'))

        // Minify the build output.
        .pipe(uglify())
        .pipe(rename({
            suffix: '-min'
        }))
        // Save the minified build to the dist folder.
        .pipe(gulp.dest('./dist'));
});
