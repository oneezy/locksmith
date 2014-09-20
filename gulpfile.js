var gulp          = require ('gulp'),
    sync          = require('browser-sync'),
    bower         = require ('gulp-bower'),
    htmlify       = require ('gulp-minify-html'),
    uglify        = require ('gulp-uglify'),
    prefix        = require ('gulp-autoprefixer'),
    minify        = require ('gulp-minify-css'),
    imgmin        = require ('gulp-imagemin'),
    rename        = require ('gulp-rename'),
    concat        = require ('gulp-concat'),
    inject        = require ('gulp-inject'),
    connect       = require ('gulp-connect'),
    open          = require ('gulp-open');

// Bower Task 
gulp.task('bower', function() {
    return bower()
      .pipe(gulp.dest('front/js/vendors'));
});

// HTML Task
gulp.task('html', function(){
    gulp.src('front/**/*.html')
//      .pipe(htmlify())
      .on('error', console.error.bind(console))
      .pipe(gulp.dest('build'))
      .pipe(connect.reload());
});

// Styles Task (Uglifies)
gulp.task('styles', function(){
    gulp.src('front/**/*.css')
//      .pipe(prefix('last 2 versions'))
      .pipe(minify())
//      .pipe(concat('css/css'))
//      .pipe(rename({
//          suffix: ".min",
//          extname: ".css"
//      }))
      .on('error', console.error.bind(console))
      .pipe(gulp.dest('build'))
      .pipe(connect.reload());
});

// Scripts Task (Uglifies)
gulp.task('scripts', function(){
    gulp.src('front/**/*.js')
      .pipe(uglify())
//      .pipe(concat('js/main'))
//      .pipe(rename({
//         suffix: ".min",
//         extname: ".js"
//      }))
      .on('error', console.error.bind(console))
      .pipe(gulp.dest('build'))
      .pipe(connect.reload());  
});

// Image Task (compress)
gulp.task('images', function(){
    gulp.src('front/images/*')
      .pipe(imgmin())
      .pipe(gulp.dest('build/images'))
      .pipe(connect.reload());
});

// Connect Task (connect to server and live reload)
gulp.task('connect', function(){
    connect.server({
      root: 'front',
      livereload: true
    });
});

// Watch Task (watches for changes)
gulp.task('watch', function(){
    gulp.watch('front/*.html', ['html']);
    gulp.watch('front/js/*.js', ['scripts']);
    gulp.watch('front/css/*.css', ['styles']);
    gulp.watch('front/images/*', ['images']);
});

// Open Task (starts app automatically)
gulp.task("open", function(){
  var options = {
    url: "http://localhost:8080",
    app: "Chrome"
  };
  gulp.src("front/index.html")
  .pipe(open("", options));
});

gulp.task('default', ['html', 'styles', 'scripts', 'images', 'connect', 'watch', 'open']);