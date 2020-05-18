
const gulp = require('gulp');
const del = require('del');
const sass = require('gulp-sass');
const webpack = require('webpack-stream');
const htmlmin = require('gulp-htmlmin');
const browserSync = require('browser-sync').create();

sass.compiler = require('node-sass');

const paths = {
  src: './src/',
  dist: './dist/'
};

paths.styles = `${paths.src}styles/`;
paths.stylesMain = `${paths.styles}main.scss`;
paths.js = `${paths.src}js/`;
paths.jsIndex = `${paths.js}index.js`;
paths.distCSS = `${paths.dist}css/`;
paths.distJS = `${paths.dist}js/`;
paths.html = `${paths.src}index.html`;

const sassOptions = {
  outputStyle: 'expanded'
};
let webpackMode = 'development';

if (process.env.NODE_ENV === 'production') {
  sassOptions.outputStyle = 'compressed';
  webpackMode = 'production';
}

gulp.task('clean', () => del([
  'dist'
]));

gulp.task('html', () => gulp.src(paths.html)
  .pipe(htmlmin({ collapseWhitespace: true }))
  .pipe(gulp.dest(paths.dist)));

gulp.task('css', () => gulp.src(paths.stylesMain)
  .pipe(sass(sassOptions).on('error', sass.logError))
  .pipe(gulp.dest(paths.distCSS)));

gulp.task('js', () => gulp.src(paths.jsIndex)
  .pipe(webpack({
    mode: webpackMode,
    output: {
      filename: 'bundle.js'
    }
  }))
  .pipe(gulp.dest(paths.distJS)));

gulp.task('watch', () => {
  gulp.watch(paths.html, gulp.series('html'));
  gulp.watch(`${paths.styles}**/*.scss`, gulp.series('css'));
  gulp.watch(`${paths.js}**/*.js`, gulp.series('js'));
});

gulp.task('serve', () => {
  browserSync.init({
    server: {
      baseDir: paths.dist
    }
  });

  gulp.watch(`${paths.dist}*.html`).on('change', browserSync.reload);
  gulp.watch(`${paths.distJS}*.js`).on('change', browserSync.reload);
  gulp.watch(`${paths.distCSS}*.css`).on('change', browserSync.reload);
});
