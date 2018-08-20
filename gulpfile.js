"use strict";

var gulp = require("gulp");
var sass = require("gulp-sass");
var server = require("browser-sync").create();

//пишем таск для работы со стилями
gulp.task("sass", function() {
  return gulp.src('sass/style.scss')
  .pipe(sass.sync().on('error', sass.logError))
  .pipe(gulp.dest("css"));
});
