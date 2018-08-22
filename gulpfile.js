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


"use strict";

var gulp = require("gulp");
var sass = require("gulp-sass");
var plumber = require("gulp-plumber");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var server = require("browser-sync").create();
var mqpacker = require("css-mqpacker");
var minify = require("gulp-csso");
var rename = require("gulp-rename");
var imagemin = require("gulp-imagemin");
var svgstore = require("gulp-svgstore");
var svgmin = require("gulp-svgmin");
var run = require("run-sequence");
var del = require("del");
var uglify = require("gulp-uglify");
var pump = require("pump");

gulp.task("style", function() {
	gulp.src("sass/style.scss")
	.pipe(plumber())
	.pipe(sass())
	.pipe(postcss([
		autoprefixer({browsers: [
			"last 1 version",
			"last 2 Chrome versions",
			"last 2 Firefox versions",
			"last 2 Opera versions",
			"last 2 Edge versions"
			]}),
		mqpacker({
			sort: false
		})
	]))
	.pipe(gulp.dest("css"))
	.pipe(gulp.dest("build/css"))
	.pipe(minify())
	.pipe(rename("style.min.css"))
	.pipe(gulp.dest("css"))
	.pipe(gulp.dest("build/css"))
	.pipe(server.stream());
});

gulp.task("images", function() {
	return gulp.src("build/img/**/*.{png,jpg,gif}")
	.pipe(imagemin([
		imagemin.optipng({optimizationlevel: 3}),
		imagemin.jpegtran({progressive: true})
		]))
	.pipe(gulp.dest("build/img"));
})

gulp.task("symbols", function() {
	return gulp.src("build/img/svgsprite/*.svg")
	.pipe(svgmin())
	.pipe(svgstore({
		inlinesvg: true
	}))
	.pipe(rename("symbols.svg"))
	.pipe(gulp.dest("build/img"));
})

gulp.task("clean", function() {
	return del("build");
})

gulp.task("compress", function (cb) {
	// the same options as described above
	var options = {
		preserveComments: "license"
	};

	pump([
			gulp.src("js/js.js"),
			uglify(),
			rename("js.min.js"),
			gulp.dest("js")
		],
			cb
	);
})

gulp.task("copy", function() {
	return gulp.src([
		"fonts/**/*.{woff,woff2,ttf}",
		"img/**",
		"js/**",
		"*.html"
		],	{
			base: "."
		})
	.pipe(gulp.dest("build"));
})

gulp.task("build", function(fn) {
	run(
		"style",
		"compress",
		"clean",
		"copy",
		"images",
		"symbols",
		fn
		);
})

gulp.task("serve", function() {
	server.init({
		server: ".",
		notify: false,
		open: true,
		ui: false
	});

	gulp.watch("sass/**/*.{scss,sass}", ["style"]);
	gulp.watch("*.html").on("change", server.reload);
});

