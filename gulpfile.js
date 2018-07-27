const gulp = require("gulp");
      watch = require("gulp-watch"),
      postcss = require("gulp-postcss"),
      cssVars = require("postcss-simple-vars"),
      cssImport = require("postcss-import"),
      cssNested = require("postcss-nested"),
      autoprefixer = require("autoprefixer"),
      browserSync = require("browser-sync").create();

gulp.task("styles", function(){
  return gulp.src("./app/assets/styles/styles.css")
    .pipe(postcss([cssImport, autoprefixer, cssVars, cssNested]))
    .on("error", function(err){
      console.log(err.toString());
      this.emit("end");
    })
    .pipe(gulp.dest("./app/temp/styles"));
});

gulp.task("watch", function(){
  browserSync.init({
    server: {
      baseDir: "app"
    }
  });

  watch("./app/assets/styles/**/*.css", function(){
    gulp.start("cssInject");
  });

  watch("./app/*.html", function(){
    browserSync.reload();
  });
});

gulp.task("cssInject", ["styles"], function(){
  return gulp.src("./app/temp/styles/styles.css")
    .pipe(browserSync.stream());
});
