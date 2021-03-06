// alkemi.js v0.0.1
//
// (c) myguide.io 2015
//
// @package alkemi
// @version 0.0.1
//
// @author Harry Lawrence <http://github.com/hazbo>
//
// License: MIT
//
// For the full copyright and license information, please view the LICENSE
// file that was distributed with this source code.

var gulp = require('gulp'),
    uglify = require("gulp-uglify"),
    rename = require('gulp-rename'),
    coffee = require('gulp-coffee');

gulp.task('build', function () {
    gulp.src('./src/*.coffee')
    .pipe(coffee({bare: true}))
    .pipe(gulp.dest('dist'));
});

gulp.task('minify', function() {
    gulp.src('./dist/*.js')
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
});
