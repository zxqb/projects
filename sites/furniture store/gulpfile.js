const {src, dest, watch, series} = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const babel = require('gulp-babel');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify-es').default;
const del = require('del');
const browserSync = require('browser-sync').create();
const svgSprite = require('gulp-svg-sprite');
const sourcemaps = require('gulp-sourcemaps');
const htmlmin = require('gulp-htmlmin');
const notify = require('gulp-notify');
const concat = require('gulp-concat');
const ifElse = require('gulp-if-else');
const gulpif = require('gulp-if');
const sass = require('gulp-sass')(require('sass'));



process.env.NODE_ENV = 'dev'
let production = process.env.NODE_ENV
let dist = production === 'prod' ? 'prod/' : 'dist/'


const clean = () => {
	return del([`${dist}*`])
}



const svgSprites = () => {
  return src('./src/img/svg/**.svg')
    .pipe(svgSprite({
      mode: {
        stack: {
          sprite: "../sprite.svg"
        },
        symbol: true
      },
    }))
    .pipe(dest(`./${dist}img`));
}

const styles = () => {
  return src('./src/styles/**/*.css')
    .pipe(gulpif(process.env.NODE_ENV === 'dev', sourcemaps.init()))
    .pipe(gulpif(process.env.NODE_ENV === 'dev',autoprefixer({
      cascade: false,
    })))
    .pipe(cleanCSS({ level: 2 }))
		.pipe(concat('main.css'))
    .pipe(gulpif(process.env.NODE_ENV === 'dev',sourcemaps.write('.')))
    .pipe(dest(`./${dist}css/`))
    .pipe(browserSync.stream());
};

const scripts = () => {
  return src(
    ['./src/js/**.js'])
    .pipe(gulpif(process.env.NODE_ENV === 'dev', sourcemaps.init()))
		.pipe(gulpif(process.env.NODE_ENV === 'dev', babel({
			presets: ['@babel/env']
		})))
    .pipe(concat('main.js'))
    .pipe(uglify().on("error", notify.onError()))
    .pipe(gulpif(process.env.NODE_ENV === 'dev', sourcemaps.write('.')))
    .pipe(dest(`./${dist}js/`))
    .pipe(browserSync.stream());
}

const resources = () => {
  return src('./src/fonts/**')
    .pipe(dest(`${dist}fonts/`))
}

const images = () => {
  return src([
    './src/img/**.webp',
    './src/img/**/*.webp',
		'./src/img/**.jpg',
		'./src/img/**.png',
		'./src/img/**.jpeg',
		'./src/img/*.svg',
		'./src/img/**/*.jpg',
		'./src/img/**/*.png',
		'./src/img/**/*.jpeg'
		])
    .pipe(dest(`./${dist}img`))
};

const watchFiles = () => {
    browserSync.init({
        server: {
            baseDir: `${dist}`
        },
    });

    watch('./src/styles/**/*.css', styles);
    watch('./src/*.html', htmlMinify);
    watch('./src/js/**/*.js', scripts);
    watch('./src/fonts/**', resources);
    watch('./src/img/**/*.{jpg,jpeg,png,svg, webp}', images);
    watch('./src/img/svg/**.svg', svgSprites);
}

const htmlMinify = () => {
	return src('src/**/*.html')
		.pipe(htmlmin({
			collapseWhitespace: true
		}))
		.pipe(dest(`${dist}`))
		.pipe(browserSync.stream());
}



exports.clean = clean;




exports.default = series(clean, scripts, styles, resources, images, svgSprites, htmlMinify, watchFiles);
