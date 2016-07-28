const path = require('path');
const del = require('del');
const gulp = require('gulp');
const ts = require('gulp-typescript');
const mocha = require('gulp-mocha');
const tslint = require('gulp-tslint');

gulp.task('clean', () => {
    return del('lib/**/*');
});

gulp.task('lint', () => {
    return gulp.src(['src/**/*.ts', 'test/**/*.ts'])
        .pipe(tslint())
        .pipe(tslint.report({
            emitError: false,
            summarizeFailureOutput: true,
            reportLimit: 20
        }));
});

gulp.task('build', ['clean', 'lint'], function () {
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
