
var gulp=require('gulp');
var sassdoc = require('sassdoc');

gulp.task('default',function(){
    console.log('echo sass semantic components...');
});

gulp.task('sassdoc', function () {
    return gulp.src('stylesheets/**/*.scss')
        .pipe(sassdoc());

});
