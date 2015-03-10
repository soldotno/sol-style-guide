var gulp = require('gulp');
var sass = require('gulp-sass');
var cssmin = require('gulp-cssmin');
var NopStream = require('../util/no-op-stream');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

var production = process.env.NODE_ENV === 'production';

gulp.task('sass', function() {
    gulp.src('./scss/*.scss')
        .pipe(sass())
        .pipe(production ? cssmin() : (new NopStream()))
        .pipe(gulp.dest('./css'))
        .pipe(reload({stream: true}));
});
