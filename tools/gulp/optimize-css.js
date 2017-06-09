const count = require('gulp-count');
const cssnano = require('cssnano');
const gulpIf = require('gulp-if');
const postcss = require('gulp-postcss');
const size    = require('gulp-size');
const uncss = require('postcss-uncss');

const paths = {
  dest: '_site/assets/dist/styles',
  src: 'assets/dist/styles/*.css'
};

const configUncss = {
  html: [ '_site/**/*.html'],
  ignore: []
}

//currently this task always runs regardless of development environment.

module.exports = (gulp, shared) => {
  gulp.task('optimize:css', () => {
    const crunchCss = shared.env === 'production';
    const postcssPlugins = [
      uncss(configUncss),  // remove any extra css
      cssnano()  // minify css
    ];

    return gulp
      .src(paths.src)
      .pipe(gulpIf(crunchCss, postcss(postcssPlugins)))
      .pipe(gulp.dest(paths.dest))
      .pipe(count('## CSS file(s) optimized'))
      .pipe(size());
    });
};
