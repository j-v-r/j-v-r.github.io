'use strict';

var gulp = require('gulp');
var concat = require('gulp-concat');
var cleanCSS = require('gulp-clean-css');
var image = require('gulp-image');


gulp.task('process-css', () => {
	return gulp.src(['css/application.css'])
		.pipe(cleanCSS())
		.pipe(concat('prod.min.css'))
		.pipe(gulp.dest('dist'));
});

gulp.task('compressModalImages', () => {
		gulp.src('imgs/projectImgs/*')
		.pipe(image({
			mozjpeg: false,
			jpegoptim: false,
			pngquant: true,
			optipng: false,
			zopflipng: true,
			jpegRecompress: true,
			gifsicle: true,
			svgo: true
		}))
		.pipe(gulp.dest('dist/imgs/projectImgs'));
});

gulp.task('compressThumbnailImages', () => {
		gulp.src('imgs/thumbnails/*')
		.pipe(image({
			mozjpeg: false,
			jpegoptim: false,
			pngquant: true,
			optipng: false,
			zopflipng: true,
			jpegRecompress: true,
			gifsicle: true,
			svgo: true
		}))
		.pipe(gulp.dest('dist/imgs/projectImgs/thumbnails'));
});

gulp.task('default', ['process-css']);