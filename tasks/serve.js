var gulp = require('gulp');
var browserSync = require('browser-sync');

gulp.task('serve', function() {
    var bsConfig = {
        ghostMode: false,
        https: true,
        server: {
            baseDir: './dist'
        }
    };

    browserSync.init(bsConfig, function(err, data) {
        if(err) {
            console.log('Error!');
        } else {
            console.log('Port: ' + data.options.get('port'));
        }
    });

});
