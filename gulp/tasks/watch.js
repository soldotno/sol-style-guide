var gulp = require('gulp');
var browserSync = require('browser-sync');
var watch = require('gulp-watch');
var reload = browserSync.reload;

gulp.task('watch', function () {
    browserSync({
        server: "."
    });

    gulp.watch('./scss/**', ['sass']);
    gulp.watch('*.html').on('change', reload);
});
