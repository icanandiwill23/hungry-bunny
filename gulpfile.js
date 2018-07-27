const gulp = require("gulp");
      watch = require("gulp-watch");

gulp.task("watch", function(){
  watch("./app/assets/styles/**/*.css", function(){
    console.log("CSS has been changed");
  });

  watch("./app/*.html", function(){
    console.log("HTML has been changed");
  });
});
