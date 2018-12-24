var gulp = require('gulp');

var flatten = require('gulp-flatten');
var merge = require('merge2');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var ts = require('gulp-typescript');
var util = require('gulp-util');

var log = util.log;

// tslint:disable:no-console
var tsProject = ts.createProject('tsconfig.json');

var buildFolder = 'dist';
var jsBuildFolder = buildFolder;
var outputPath = './' + buildFolder + '/';

var watchFiles = [
    './src/**/**/*.scss', /* SASS files */
    './src/**/*.ts', './src/**/*.tsx', '!./src/**/__tests__/*' /* Typescript files */
];

var buildTasks = ['build-js', 'copy-css'];

gulp.task('default', buildTasks);

gulp.task('build-js', function () {
    var tsResult = gulp.src(['./src/**/*.ts', './src/**/*.tsx', '!./src/**/__tests__/*'])
        .pipe(tsProject());

    return merge([ // Merge the two output streams, so this task is finished when the IO of both operations is done.
        tsResult.dts.pipe(gulp.dest('typedefs')),
        tsResult.js.pipe(gulp.dest(jsBuildFolder))
    ]);
});

gulp.task('copy-css', function () {
    gulp.src(['./src/components/**/*.css'])
        .pipe(gulp.dest('./' + buildFolder + '/components/'));
    gulp.src(['./src/css/*.css'])
        .pipe(flatten())
        .pipe(gulp.dest('./' + buildFolder + '/css/'));
});

gulp.task('watch', function () {
    log('Watching scss files for modifications');
    gulp.watch(watchFiles, ['copy-css', 'build-js']);
});

