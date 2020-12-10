const path = require("path");
const rimraf = require("rimraf");

const gulp = require("gulp");
const less = require("gulp-less");
const cssmin = require("gulp-clean-css");
const ts = require("gulp-typescript");
const plumber = require("gulp-plumber");

gulp.task("clean", async () => {
  rimraf.sync(path.resolve(__dirname, "lib"));
});

gulp.task("compile-ts", () => {
  return gulp
    .src(["./src/**/*.js", "./src/**/*.ts", "./src/**/*.tsx"])
    .pipe(plumber({}))
    .pipe(
      ts({
        allowJs: true,
        noImplicitAny: true,
        allowSyntheticDefaultImports: true,
        declaration: true,
        module: "commonjs",
        esModuleInterop: true,
        target: "es5",
        jsx: "react",
      })
    )
    .pipe(plumber.stop())
    .pipe(gulp.dest("lib"));
});

gulp.task("compile-less", () => {
  return gulp
    .src(["src/**/*.less"])
    .pipe(less())
    .pipe(cssmin())
    .pipe(gulp.dest("lib"));
});

gulp.task("copy-less", () => {
  return gulp.src("src/**/*.less", { base: "src" }).pipe(gulp.dest("lib"));
});

gulp.task(
  "default",
  gulp.series("clean", "compile-ts", "compile-less", "copy-less")
);
