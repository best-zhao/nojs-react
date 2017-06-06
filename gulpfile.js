var gulp = require('gulp');
var less = require('gulp-less');
var concat = require('gulp-concat');                            
var minifyCss = require('gulp-minify-css');                     

var base = '.'
var src = base+'/less/**/*.less'

gulp.task('concat', function() {                                
    gulp.src([src])    
        .pipe(less())
        .pipe(minifyCss())                                      
        .pipe(gulp.dest(base+'/css'))
});

gulp.task('watch', function() {
  gulp.watch(src, ['concat']);
});

gulp.task('default', ['concat']);