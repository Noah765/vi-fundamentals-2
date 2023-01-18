const gulp = require("gulp");
const sass = require("gulp-sass")(require("node-sass"));
const connect = require("gulp-connect");
var rename = require("gulp-rename");

function styles(done) {
  gulp
    .src(["./src/scss/*.scss"])
    .pipe(
      sass({
        includePaths: ["./src/scss"],
        outputStyle: "expanded",
      }).on("error", sass.logError)
    )
    .pipe(gulp.dest("./srv/css"));
  done();
}

function js(done) {
  gulp.src(["./src/js/*.js"]).pipe(gulp.dest("./srv/js/"));
  gulp
    .src("./node_modules/es6-scroll-to/lib/index.js")
    .pipe(rename("es6-scroll-to.js"))
    .pipe(gulp.dest("./srv/js/"));
  done();
}

function html(done) {
  gulp.src("./src/*.html").pipe(gulp.dest("./srv/"));
  done();
}

function connectOpen() {
  const open = require("open");
  return open("http://localhost:1337");
}

function connection() {
  connect.server({
    root: "srv",
    port: 1337,
    livereload: true,
  });
}

function livereload(done) {
  gulp.src("./srv/**/*").pipe(connect.reload());
  done();
}

function watch() {
  gulp.watch("./src/*.html", gulp.series(html));
  gulp.watch("./src/js/*.js", gulp.series(js));
  gulp.watch("./src/scss/*.scss", gulp.series(styles));
  gulp.watch("./src/**/*", gulp.series(livereload));
}

exports.watch = watch;
exports.styles = styles;
exports.connection = connection;
exports.connectOpen = connectOpen;
exports.livereload = livereload;
exports.js = js;
exports.html = html;
exports.default = gulp.parallel(styles, js, html, connection, connectOpen, watch);
