var gulp = require('gulp');

gulp.task('movehtml',['clean'], () => {
  // the base option sets the relative root for the set of files,
  // preserving the folder structure
  gulp.src('src/html/*')
  .pipe(gulp.dest('dist'));
});
