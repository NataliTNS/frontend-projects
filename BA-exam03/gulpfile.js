var gulp = require ('gulp'),
    sass = require ('gulp-sass'),
    rename = require ('gulp-rename'),
    // min = require ('gulp-clean-css'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    autoprefixer = require('gulp-autoprefixer'),
    // imagemin = require('gulp-imegemin'),
    // imageop = require('gulp-image-optimization');
    browserSync = require('browser-sync');

gulp.task('sassToCss', function () {
    return gulp.src('./sass/style.scss')
        .pipe(sass())
        .pipe(autoprefixer())
        // .pipe(min())
        // .pipe(rename('new-css.min.css'))
        .pipe(rename('style.css'))
        .pipe(gulp.dest ('./css'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('imagemin', function() {
    gulp.src('./img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./img'))
});

gulp.task('browserSync', function() {
    browserSync({
        server: {
        baseDir: './'
    },
    open: true,
    notify: false
})
});
// gulp.task('jsOptimize', function () {
//    // gulp.src(['./js/*.js'])
//    gulp.src(['./js/jquery-3-2-0.min.js',/* '.js/slick.min.js',*/ './js/main.js'])
//        .pipe(concat('custom-js.min.js'))
//        .pipe(uglify(''))
//        .pipe(rename({
//            basename: 'main',
//            prefix: 'ba-',
//            suffix: '.min'
//        }))
//        .pipe(gulp.dest('./js'))
// });

// gulp.task('default', ['sassToCss', 'jsOptimize'])
gulp.task('watch', ['browserSync', 'sassToCss'], function () {
    gulp.watch('./sass/*.scss', ['sassToCss']);
    gulp.watch('*.html', browserSync.reload);
    gulp.watch('./js/*.js', browserSync.reload);
});