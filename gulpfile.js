const gulp = require('gulp'),
    del = require('del'),
    browserSync = require('browser-sync').create(),
    prettify = require('gulp-prettify'),
    uglifyJS = require('gulp-uglify'),
    pump = require('pump'),
    path = require('path'),
    sass = require('gulp-sass'),
    cleanCSS = require('gulp-clean-css'),
    rename = require('gulp-rename'),
    nunjucks = require('gulp-nunjucks-html'),
    autoprefixer = require('gulp-autoprefixer'),
    sassLint = require('gulp-sass-lint'),
    eslint = require('gulp-eslint'),
    webpack = require('webpack-stream');

const outDir = (process.argv.indexOf('--out') > -1) ?
    process.argv[process.argv.indexOf('--out') + 1] : './build/';

const paths = {
    htmlPath: './source/html',
    htmlFiles: './source/html/pages/**/*.html',
    htmlDist: outDir + '/html',
    sassFiles: [
        './source/sass/**/*.scss',
        '!./source/sass/vendor/**/*.scss',
        './source/sass/vendor/bootstrap-3.3.7/bootstrap.scss'
    ],
    sassFilesToLinting: [
        './source/sass/components/**/*.scss',
        './source/sass/main.scss'
    ],
    cssDist: outDir + '/css',
    jsSrc: './source/js',
    jsFiles: ['./source/js/**/*.js'],
    jsDevelopedFiles: [
        './source/js/components/**/*.js',
        './source/js/__debug_true.js',
        './source/js/common.js'
    ],
    jsVendorsFiles: './source/js/vendor/**/*.js',
    jsDist: outDir + '/js',
    fontFiles: './source/fonts/**/*.*',
    fontDist: outDir + '/fonts',
    imgFiles: './source/img/**',
    imgDist: outDir + '/img/',
    tmpDir: outDir + '/tmp/'
};

const configs = {
    lintSass: './.sass-lint.yml',
    lintJs: './.js-lint.json',
    webpack: require('./.webpack.js')
};

gulp.task('browserSyncConnect', function() {
    browserSync.init({
        server: {
            baseDir: './',
            directory: true
        }
    });
});

gulp.task('clean', function() {
    return del(['build/**'], {
        force: true
    });
});

gulp.task('compileHtml', function() {
    return gulp.src(paths.htmlFiles)
        .pipe(nunjucks({
            searchPaths: [paths.htmlPath]
        }))
        .pipe(gulp.dest(paths.htmlDist));
});

gulp.task('copyJs', function() {
    return gulp.src(paths.jsVendorsFiles)
        .pipe(gulp.dest(paths.jsDist + '/vendor'));
});

gulp.task('copyFonts', function() {
    return gulp.src([paths.fontFiles, servicePaths.fontFiles])
        .pipe(gulp.dest(servicePaths.fontDist));
});

gulp.task('copyImg', function() {
    return gulp.src(paths.imgFiles)
        .pipe(gulp.dest(paths.imgDist));
});

gulp.task('lintJs', function() {
    return gulp.src(paths.jsDevelopedFiles, { since: gulp.lastRun('lintJs') })
        .pipe(eslint({
            configFile: configs.lintJs
        }))
        .pipe(eslint.format());
});

gulp.task('webpack', function() {
    return gulp.src(paths.jsDevelopedFiles, { since: gulp.lastRun('webpack') })
        .pipe(webpack(configs.webpack))
        .pipe(gulp.dest(paths.jsDist));
});

gulp.task('compileJs', gulp.series('lintJs', 'copyJs', 'webpack'));

gulp.task('lintSass', function() {
    return gulp.src(paths.sassFilesToLinting, { since: gulp.lastRun('lintSass') })
        .pipe(sassLint({
            configFile: configs.lintSass
        }))
        .pipe(sassLint.format());
});

gulp.task('compileSass', gulp.series('lintSass', function() {
    return gulp.src(paths.sassFiles)
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(gulp.dest(paths.cssDist))
        .pipe(browserSync.stream());
}));

gulp.task('reloadHtml', function() {
    return gulp.src(paths.htmlDist)
        .pipe(browserSync.stream());
});

gulp.task('default', gulp.series('clean', gulp.parallel('compileHtml', 'compileJs', 'copyImg', 'compileSass')));

gulp.task('watch', gulp.parallel('default', 'browserSyncConnect', function() {
    gulp.watch(paths.sassFiles, gulp.series('compileSass'));
    gulp.watch(paths.jsSrc + '/**/*.js', gulp.series('compileJs', 'reloadHtml'));
    gulp.watch(paths.htmlPath + '/**/*.html', gulp.series('compileHtml', 'reloadHtml'));
}));
