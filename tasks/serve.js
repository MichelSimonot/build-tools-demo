var gulp = require('gulp');
var browserSync = require('browser-sync');
var open = require('open');

gulp.task('serve', function() {
    var bsConfig = {
        ghostMode: false,
        https: true,
        server: {
            baseDir: './index.html'
        }
    };

    browserSync.init(bsConfig, function(err, data) {

    });

});
