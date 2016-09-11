var gulp = require('gulp');
var eslint = require('gulp-eslint');

/**
 * Linting task.
 * Analyzes code to check for potential syntax and style issues.
 * Uses ESLint (http://eslint.org/) to do so.
 * See the .eslintrc.yml configuration file for linting rules.
 */
gulp.task('lint', function() {
    var toLint = [
        'src/**.js',
        'tasks/**.js',
        'tests/**.js'
    ];

    return gulp.src(toLint)
        .pipe(eslint())
        .pipe(eslint.format('stylish'));
});
