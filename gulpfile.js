const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');


// Compile & minify css
function css() {
	return gulp.src('./scss/icons.scss')
	  .pipe(sourcemaps.init())
	  .pipe(sass({outputStyle: 'compressed'}))
	  .pipe(postcss([autoprefixer()]))
	  .pipe(sourcemaps.write('.'))
	  .pipe(gulp.dest('./css'));
}

// Watch
function watch () {
	// Watch scss files
	gulp.watch('scss/*.scss', css);
}

// Public task
exports.css = css;
exports.watch = watch;

// Default Task
exports.default = gulp.series(css, watch);
