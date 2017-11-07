'use strict';

/**
 * Note:
 * Before running this scripts make sure
 * that all dependencies have been 
 * installed and that both NodeJS and
 * the Angular "ng build --watch" command
 * are running, or use "npm run dev".
 */

// Dependencies
const browserSync = require('browser-sync').create();
const gulp = require('gulp');

// Constants
const watch = './dist/**/*';

// Runs browser sync
gulp.task('default', () => {
    browserSync.init({
          proxy: 'localhost:3000',
          port: 5000
    });

    // Reload on file change
    gulp.watch(watch).on('change', browserSync.reload);

});