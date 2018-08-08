const gulp     = require("gulp"),
      imagemin = require("gulp-imagemin"),
      del      = require("del"),
      usemin   = require("gulp-usemin"),
      cssnano = require("gulp-cssnano"),
      uglify = require("gulp-uglify"),
      htmlmin = require("gulp-htmlmin"),
      rev = require("gulp-rev"),
      browserSync = require("browser-sync").create();

gulp.task("previewDocs", function(){
  browserSync.init({
    server: {
      baseDir: "docs"
    }
  });
});

gulp.task("del", function(){
  del("./docs");
});

gulp.task("generalFiles", ["del"], function(){
  let paths = [
    "./app/**/*",
    "./app/assets/fonts/**/*",
    "!./app/images/**/*",
    "!./app/images",
    "!./app/assets/styles/**/*",
    "!./app/assets/scripts/**/*",
    "!./app/temp/**/*",
    "!./app/temp"
  ];

  return gulp.src(paths)
    .pipe(gulp.dest("./docs"));
});

gulp.task("optimizeImages", ["del"], function(){
  return gulp.src("./app/assets/images/**/*")
    .pipe(imagemin([
      imagemin.gifsicle({interlaced: true}),
      imagemin.jpegtran({progressive: true}),
      imagemin.optipng({optimizationLevel: 5}),
      imagemin.svgo({
        plugins: [
          {removeViewBox: true},
          {cleanupIDs: false}
        ]
      })
    ]))
    .pipe(gulp.dest("./docs/assets/images"));
});

gulp.task("useminTrigger", ["del"], function(){
  gulp.start("usemin");
});

gulp.task("usemin", ["styles", "scripts"], function(){
  return gulp.src("./app/*.html")
    .pipe(usemin({
      css: [function(){ return cssnano() }, function(){ return rev() }],
      htmlmin: [ htmlmin({ collapseWhitespace: true }) ],
      js: [function(){ return uglify() }, function(){ return rev() }]
    }))
    .pipe(gulp.dest("./docs"));
});

gulp.task("build", ["del", "generalFiles", "optimizeImages", "useminTrigger"]);
