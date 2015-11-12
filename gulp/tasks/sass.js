var gulp = require('gulp');
var sass = require('gulp-sass');
var cssmin = require('gulp-cssmin');
var NopStream = require('../util/no-op-stream');
var autoprefixer = require('gulp-autoprefixer');


var production = process.env.NODE_ENV === 'production';

gulp.task('sass', ['clean'], function() {
    gulp.src('./src/scss/pages/*.scss')
        .pipe(sass())
        .pipe(autoprefixer({
          browsers: ["> 2% in NO" ]
        }))
        .pipe(production ? cssmin() : (new NopStream()))
        .pipe(gulp.dest('./dist/css'))
});
