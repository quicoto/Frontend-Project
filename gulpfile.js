const gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    browserSync = require('browser-sync').create(),
    cleanCSS = require('gulp-clean-css'),
    concat = require('gulp-concat'),
    del = require('del'),
    eslint = require('gulp-eslint'),
    nunjucks = require('gulp-nunjucks-html'),
    rename = require('gulp-rename'),
    sourcemaps = require('gulp-sourcemaps');
    sass = require('gulp-sass'),
    sassLint = require('gulp-sass-lint'),
    path = require('path'),
    prettify = require('gulp-prettify'),
    pump = require('pump'),
    uglifyJS = require('gulp-uglify'),
    webpack = require('webpack-stream');

const outDir = (process.argv.indexOf('--out') > -1) ?
    process.argv[process.argv.indexOf('--out') + 1] : './build/';

const paths = {
    htmlPath: './source/html',
    htmlFiles: './source/html/pages/**/*.html',
    htmlDist: outDir + '/html',
    sassFiles: [
        './source/sass/main.scss'
    ],
    sassFilesToLinting: [
        './source/sass/components/**/*.scss',
        './source/sass/main.scss'
    ],
    cssDist: outDir + '/css',
    jsSrc: './source/js',
    jsFiles: ['./source/js/**/*.js'],
    jsDevelopedFiles: [
        './source/js/applications/**/*.js',
        './source/js/components/**/*.js'
    ],
    jsVendorsFiles: './source/js/vendor/**/*.js',
    jsDist: outDir + '/js',
    jsDistApps: outDir + '/js/applications',
    fontFiles: './source/fonts/**/*.*',
    fontDist: outDir + '/fonts',
    imgFiles: './source/img/**',
    imgDist: outDir + '/img/',
    tmpDir: outDir + '/tmp/'
};

const configs = {
    lintSass: './.sass-lint.yml',
    lintJs: './.js-lint.json',
    webpackDev: require('./.webpackDev.js'),
    webpackProd: require('./.webpackProd.js')
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

gulp.task('vendorJs', function() {
    return gulp.src(paths.jsVendorsFiles)
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest(paths.jsDist));
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

gulp.task('webpackDev', function() {
    return gulp.src(paths.jsDevelopedFiles)
        .pipe(webpack(configs.webpackDev))
        .pipe(gulp.dest(paths.jsDistApps));
});

gulp.task('webpackProd', function() {
    return gulp.src(paths.jsDevelopedFiles)
        .pipe(webpack(configs.webpackProd))
        .pipe(gulp.dest(paths.jsDistApps));
});

gulp.task('lintSass', function() {
    return gulp.src(paths.sassFilesToLinting, { since: gulp.lastRun('lintSass') })
        .pipe(sassLint({
            configFile: configs.lintSass
        }))
        .pipe(sassLint.format());
});

gulp.task('compileDevSass', gulp.series('lintSass', function() {
    return gulp.src(paths.sassFiles)
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(paths.cssDist))
        .pipe(browserSync.stream());
}));

gulp.task('compileProdSass', gulp.series('lintSass', function() {
    return gulp.src(paths.sassFiles)
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(gulp.dest(paths.cssDist))
        .pipe(browserSync.stream());
}));

gulp.task('minifyCSS', function() {
  return gulp.src(paths.cssDist + '/*.css')
    .pipe(cleanCSS())
    .pipe(gulp.dest(paths.cssDist));
});

gulp.task('minifyJS', function (cb) {
  pump([
        gulp.src(paths.jsDistApps + '/*.js'),
        uglifyJS(),
        gulp.dest(paths.jsDistApps)
    ],
    cb
  );
});

gulp.task('reloadHtml', function() {
    return gulp.src(paths.htmlDist)
        .pipe(browserSync.stream());
});

gulp.task('compileJsDev', gulp.series('lintJs', 'vendorJs', 'webpackDev'));
gulp.task('compileJsProd', gulp.series());

// gulp
gulp.task('default', gulp.series('clean', gulp.parallel('compileHtml', 'compileJsProd', 'copyImg', 'compileProdSass'), gulp.parallel('minifyJS', 'minifyCSS')));

// gulp watch
gulp.task('dev', gulp.series('clean', gulp.parallel('compileHtml', 'compileJsDev', 'copyImg', 'compileDevSass')));
gulp.task('watch', gulp.parallel('dev', 'browserSyncConnect', function() {
    gulp.watch(paths.sassFiles, gulp.series('compileDevSass'));
    gulp.watch(paths.jsSrc + '/**/*.js', gulp.series('compileJsDev', 'reloadHtml'));
    gulp.watch(paths.htmlPath + '/**/*.html', gulp.series('compileHtml', 'reloadHtml'));
}));
