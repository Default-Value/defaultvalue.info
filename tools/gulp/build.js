const runSequence = require('run-sequence');

module.exports = (gulp, shared) => {
  gulp.task('build', (callback) => {
    runSequence(['sass', 'jekyll:build'],
                'optimize:css',
                callback);
  });
};
