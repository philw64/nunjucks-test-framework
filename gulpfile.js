var gulp = require('gulp');
var nunjucksRender = require('gulp-nunjucks-render');

function defaultTask(cb) {
  // place code for your default task here
}

exports.default = defaultTask

gulp.task('nunjucks', function() {
  // Gets .html and .njk files in pages
  return gulp.src('./pages/**/*.+(html|njk)')
  // Renders template with nunjucks
  .pipe(nunjucksRender({
      path: ['./templates']
    }))
  // output files in dest folder
  .pipe(gulp.dest('./dest'))
});

