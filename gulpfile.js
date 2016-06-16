// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');
var surge = require('gulp-surge');

// Move HTML
gulp.task('copy-files', function() {
    gulp.src(['./index.html','images/*'],{
      base: '.'
    })
    // Perform minification tasks, etc here
    .pipe(gulp.dest('dist'));
});

// Lint Task
gulp.task('lint', function() {
    return gulp.src('js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// Compile Our Sass
gulp.task('sass', function() {
    return gulp.src('css/*.scss')
        .pipe(sass())
        .pipe(autoprefixer({
          browsers: ['last 5 versions'],
          cascade: false
        }))
        .pipe(gulp.dest('dist/css'));
});

// Concatenate & Minify JS
gulp.task('scripts', function() {
    return gulp.src('js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('*.html', ['copy-files']);
    gulp.watch('js/*.js', ['lint', 'scripts']);
    gulp.watch('css/*.scss', ['sass']);
});

// Default Task
gulp.task('default', ['copy-files','lint', 'sass', 'scripts', 'watch']);

gulp.task('deploy', [], function () {
  return surge({
    project: './dist',         // Path to your static build directory
    domain: 'teeny-tiny-sail.surge.sh'  // Your domain or Surge subdomain
  })
})