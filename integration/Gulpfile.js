var path = require("path");
var gulp = require("gulp");

var sass = require("gulp-sass");
var Eyeglass = require("eyeglass").Eyeglass;
var rootDir = __dirname;
var assetsDir = path.join(rootDir, "assets");
var buildDir = path.join(rootDir, "dist");
var inFile = path.join(rootDir, "assets", "scss", "app.scss")
var outFile = path.join(rootDir, "dist", "css", "app.css")
var browserSync = require("browser-sync").create();

var gutil = require("gulp-util");
var source = require("vinyl-source-stream");
var babelify = require("babelify");
var watchify = require("watchify");
var exorcist = require("exorcist");
var browserify = require("browserify");


var eyeglass = new Eyeglass({
  // specifying root lets the script run from any directory instead of having to be in the same directory.
  root: rootDir,
  // where assets are installed by eyeglass to expose them according to their output url.
  // If not provided, assets are not installed unless you provide a custom installer.
  buildDir: buildDir,
  // prefix to give assets for their output url.
  assetsHttpPrefix: "assets",
  // Sass file to compile.
  file: inFile,
   // always pass the output file for path resolution purposes.
  outFile: outFile,

  importer: function(uri, prev, done) {
      done(sass.compiler.types.NULL);
  }
});

// Disable import once with gulp until we
// figure out how to make them work together.
eyeglass.enableImportOnce = false;

var bundler = watchify(browserify("./assets/es/main.es", watchify.args));

// Babel transform
bundler.transform(babelify.configure({
    sourceMapRelative: "assets/es"
}));

// On updates recompile
bundler.on("update", bundle);

function bundle() {

    gutil.log("Compiling JS...");

    return bundler.bundle()
        .on("error", function (err) {
            gutil.log(err.message);
            browserSync.notify("Browserify Error!");
            this.emit("end");
        })
        .pipe(exorcist("js/bundle.js.map"))
        .pipe(source("js/bundle.js"))
        .pipe(gulp.dest("./dist/"))
        .pipe(browserSync.stream({once: true}));
}

/**
 * Gulp task alias
 */
gulp.task("bundle", function () {
    return bundle();
});

gulp.task("sass", function () {
  return gulp.src("./assets/scss/app.scss")
    .pipe(sass(eyeglass.sassOptions()))
    .pipe(gulp.dest("./dist/css"))
    .pipe(browserSync.stream());
});

// Static Server + watching scss/html files
gulp.task("serve", ["sass", "bundle"], function() {
    browserSync.init({
        server: "./"
    });
    gulp.watch("assets/scss/**/*.scss", ["sass"]);
    gulp.watch("assets/es/**/*.es", ["bundle"]);
    gulp.watch("*.html").on("change", browserSync.reload);
});

gulp.task("default", ["serve"]);
