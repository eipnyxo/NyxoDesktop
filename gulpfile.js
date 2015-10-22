function swallowError (error) {
  console.log(error.toString());
  this.emit('end');
}

var gulp = require('gulp'),
        sass = require('gulp-sass'),
        autoprefixer = require('gulp-autoprefixer'),
        minifycss = require('gulp-minify-css'),
        rename = require('gulp-rename');
        livereload = require('gulp-livereload');

gulp.task('styles', function() {
      return gulp.src('./sass/*.scss')
        .pipe(sass({ style: 'expanded' }))
        .on('error', swallowError)
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1'))
        .pipe(gulp.dest('./sass/tmp_css'))
        .pipe(rename({suffix: '.min'}))
        .pipe(minifycss())
        .pipe(livereload())
        .pipe(gulp.dest('./css'));
});

gulp.task('watch', function() {
  livereload.listen();
  gulp.watch('./sass/**/*.scss', ['styles']);
});

gulp.task('default', ['styles', 'watch'], function() {
  livereload.listen();
});
