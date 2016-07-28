const path = require('path');
const del = require('del');
const gulp = require('gulp');
const ts = require('gulp-typescript');
const mocha = require('gulp-mocha');

gulp.task('clean', () => {
    return del('lib/**/*');
});

gulp.task('build', ['clean'], function () {
    const tsProject = ts.createProject(path.join(__dirname, 'tsconfig.json'));

    return tsProject.src()
        .pipe(ts(tsProject))
        .js.pipe(gulp.dest(tsProject.options.outDir));
});

gulp.task('test', ['build'], () => {
    return gulp.src('lib/test/**/*.js', { read: false })
        .pipe(mocha());
});

gulp.task('test:watch', ['test'], () => {
    return gulp.watch(['src/**/*.ts', 'test/**/*.ts'], ['test']);
});
