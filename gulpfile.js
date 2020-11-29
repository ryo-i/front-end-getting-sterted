const gulp = require('gulp');
const rename = require('gulp-rename');
const ejs = require('gulp-ejs');
const fs = require('fs');
const replace = require('gulp-replace'); 
const sass = require('gulp-sass');
const webpackStream = require('webpack-stream');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config');
const browserSync = require('browser-sync'); 
const plumber = require('gulp-plumber');
const imagemin = require('gulp-imagemin');
const mozjpeg = require('imagemin-mozjpeg');
const pngquant = require('imagemin-pngquant');
const del = require('del');


// ファイルパス：コンパイル前
const srcJsonFiles = './src/json/**/*.json';
const srcDataJson = './src/json/data.json';
const srcEjsFiles = './src/ejs/**/*.ejs';
const srcEjsPartial = '!./src/ejs/**/_*.ejs';
const srcScssFiles = './src/scss/**/*.scss';
const srcTsFiles = './src/ts/**/*.ts';
const srcImgFiles = './src/img/**/*'
const srcImgFileType = '{jpg,jpeg,png,gif,svg}';


// ファイルパス：コンパイル後
const destDir = './dest/';
const destFiles = './dest/**/*';
const destHtmlFiles = './dest/*.html';
const destIndexHtml = 'index.html';
const destCssDir = './dest/css';
const destCssFiles = './dest/css/*.css';
const destJsDir = './dest/js';
const destJSFiles = './dest/js/*.js';
const destImtDir = './dest/img';
const destImgFiles = './dest/img/*';


// EJSコンパイル
const compileEjs = (done) => {
    const data = JSON.parse(fs.readFileSync(srcDataJson));
    gulp.src([srcEjsFiles, srcEjsPartial])
      .pipe(plumber())
      .pipe(ejs(data))
      .pipe(ejs({}, {}, { ext: '.html' }))
      .pipe(rename({ extname: '.html' }))
      .pipe(replace(/^[ \t]*\n/gmi, ''))
      .pipe(gulp.dest(destDir));
    done();
};


// sassコンパイル
const compileSass = (done) => {
    gulp.src(srcScssFiles)
        .pipe(sass({
                    outputStyle: 'expanded'
				})
            )
		.on('error', sass.logError)
        .pipe(gulp.dest(destCssDir));
    done();
};


// TypeScriptをwebpackでバンドル
const bundleWebpack = (done) => {
    webpackStream(webpackConfig, webpack)
      .pipe(gulp.dest(destJsDir));
    done();
};


// リロードするhtml
const reloadFile = (done) => {
    browserSync.init({
        server : {
            baseDir : destDir,
            index : destIndexHtml,
		},
    });
    done();
};


// リロード設定
const reloadBrowser = (done) => {
    browserSync.reload();
    done();
};


// 画像圧縮
const minifyImage = (done) => {
    gulp.src(srcImgFiles + srcImgFileType)
        .pipe(imagemin(
        [
            pngquant({ quality: '65-80', speed: 1 }),
            mozjpeg({ quality: 80 }),
            imagemin.svgo(),
            imagemin.gifsicle()
        ]
        ))
        .pipe(gulp.dest(destImtDir));
    done();
};


// destフォルダのファイル削除
const clean = (done) => {
    del([destFiles, '!' + destCssDir, '!' + destJsDir, '!' + destImtDir]);
    done();
};


// HTMLファイル削除
const htmlClean = (done) => {
    del([destHtmlFiles]);
    done();
};


// 画像ファイル削除
const imgClean = (done) => {
    del([destImgFiles]);
    done();
};


// タスク化
exports.compileEjs = compileEjs;
exports.compileSass = compileSass;
exports.bundleWebpack = bundleWebpack;
exports.reloadFile = reloadFile;
exports.reloadBrowser = reloadBrowser;
exports.minifyImage = minifyImage;
exports.clean = clean;
exports.htmlClean = htmlClean;
exports.imgClean = imgClean;


// 監視ファイル
const watchFiles = (done) => {
    gulp.watch([srcEjsFiles, srcJsonFiles], gulp.series(htmlClean, compileEjs));
    gulp.watch(destHtmlFiles, reloadBrowser);
    gulp.watch(srcScssFiles, compileSass);
    gulp.watch(destCssFiles, reloadBrowser);
    gulp.watch([srcTsFiles, srcJsonFiles], bundleWebpack);
    gulp.watch(destJSFiles, reloadBrowser);
    gulp.watch(srcImgFiles, gulp.series(imgClean, minifyImage));
    gulp.watch(destImgFiles, reloadBrowser);
    done();
};


// タスク実行
exports.default = gulp.series(
    clean, watchFiles, reloadFile, compileEjs, compileSass, bundleWebpack, minifyImage
);