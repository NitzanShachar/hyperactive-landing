var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var plumber = require('gulp-plumber'); 
 
gulp.task('sass', function () {
  gulp.src('./styles/styles.scss')
      .pipe(plumber())
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('./styles/CSS/', {overwrite: true}));
});
 
gulp.task('compress', function() {
  gulp.src([
    'app.js',
    'js/*.js',
    'js/Components/*.js'
  ])
    .pipe(concat('app.min.js'))
    .pipe(gulp.dest('./', {overwrite: true}));
});

gulp.task('watch', function () {
    gulp.watch('./styles/*.scss', ['sass']);
    gulp.watch(['js/*/*.js', 'js/*.js', 'app.js'], ['compress']);
    gulp.watch(['*.html', 'js/Components/Templates/*.html'], ['compress']);
});

gulp.task('default', ['sass', 'compress', 'watch']);