var gulp = require('gulp');
var sass = require("gulp-sass");

gulp.task("compileSass", function () {
    gulp.src("scss/*.scss").pipe(sass()).pipe(gulp.dest("css"));
});

gulp.task("watchSass", function () {
    gulp.watch('sass/*.scss', ['styles']);
});