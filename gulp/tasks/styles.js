const gulp = require("gulp");
      postcss = require("gulp-postcss"),
      cssVars = require("postcss-simple-vars"),
      cssImport = require("postcss-import"),
      cssNested = require("postcss-nested"),
      autoprefixer = require("autoprefixer"),
      hexrgba = require("postcss-hexrgba"),
      cssMixin = require("postcss-mixins");

gulp.task("styles", function(){
  return gulp.src("./app/assets/styles/styles.css")
    .pipe(postcss([cssImport, cssMixin, autoprefixer, cssVars, cssNested, hexrgba]))
    .on("error", function(err){
      console.log(err.toString());
      this.emit("end");
    })
    .pipe(gulp.dest("./app/temp/styles"));
});
