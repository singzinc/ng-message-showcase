var gulp = require('gulp');
var bower = require('gulp-bower');
var concat = require('gulp-concat');
var filter = require('gulp-filter');
var browserSync = require('browser-sync');

gulp.task('bower', function() {
 const f = filter(['**/*.js','**/*.css','!**/index.js']);
 return bower({ directory: 'bower_components' })
	.pipe(f)
    .pipe(gulp.dest('app/lib'))
});

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: './'
        },
        startPath: './app/main.html'
    });
});

gulp.task('watch', function() {
  // Watch .html files
  gulp.watch('app/*.html', browserSync.reload);
  // Watch .js files
  gulp.watch('src/js/*.js', ['scripts']);
  // Watch .scss files
  gulp.watch('src/scss/*.scss', ['sass', 'sass-minify']);
});

gulp.task('default', ['bower', 'browser-sync', 'watch']);
