
var gulp=require('gulp');
var sassdoc = require('sassdoc');
var sass = require('gulp-sass');
var REPO_NAME='sass-semantic-components';

gulp.task('default',function(){
    console.log(REPO_NAME + ' ..."tasks: gulp dist|sassdoc"');
});

gulp.task('sassdoc', function () {
    return gulp.src('stylesheets/**/*.scss')
        .pipe(sassdoc());

});

gulp.task('dist', function () {
    compileSass();
});


///private
function compileSass(){
    gulp.src('./src/semantic.scss')
        .pipe(sass())
        .pipe(gulp.dest('./dist'));
}
