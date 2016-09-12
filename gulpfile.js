var gulp = require('gulp');

var calculate = require('./src/calculator').calculate;
//Run task; for easier testing for now.
gulp.task('run', function(done) {
    var equation = '2+3';
    calculate(equation);
    done();
})


// Add tasks to the gulpfile.
require('require-dir')('./tasks');
