var gulp = require('gulp'),
	jade = require('gulp-jade'),
	stylus = require('gulp-stylus'),
	autoprefixer = require('autoprefixer-stylus'),
	myth = require('gulp-myth'),
	uglify = require('gulp-uglify'),
	imagemin = require('gulp-imagemin'),
	clean = require('gulp-clean');

gulp.task('jade', function() {
	return gulp.src('./src/tmpl/*.jade')
		.pipe(jade({pretty: true}))
		.on('error', console.log)
		.pipe(gulp.dest('./public/'));
});

gulp.task('stylus', function() {
	return gulp.src('./src/stylus/*.styl')
		.pipe(stylus({
			use: [autoprefixer('last 2 versions')]
		}))
		.on('error', console.log)
		.pipe(myth())
		.pipe(gulp.dest('./public/css/'));
});

gulp.task('js', function() {
	return gulp.src('./src/js/*.js')
		.on('error', console.log)
		.pipe(uglify())
		.pipe(gulp.dest('./public/js/'));
});

gulp.task('images', function() {
	return gulp.src('./src/img/*.*')
		.on('error', console.log)
		.pipe(imagemin())
		.pipe(gulp.dest('./public/img/'));
});

gulp.task('fonts', function() {
	return gulp.src('./src/fonts/*/**')
		.on('error', console.log)
		.pipe(gulp.dest('./public/fonts/'));
});

gulp.task('libs', function() {
	return gulp.src('./src/libs/*/**')
		.on('error', console.log)
		.pipe(gulp.dest('./public/libs/'));
});

gulp.task('clean', function () {
	return gulp.src('public/*', {read: false})
		.pipe(clean());
});

gulp.task('build', ['clean'], function() {
	gulp.run('jade', 'stylus', 'js', 'images', 'fonts', 'libs');
});

gulp.task('default', function() {
	gulp.run('build');

	gulp.watch('src/tmpl/*.jade', function(event) {
		gulp.run('jade');
	})

	gulp.watch('src/stylus/*.styl', function(event) {
		gulp.run('stylus');
	})

	gulp.watch('src/js/*.js', function(event) {
		gulp.run('js');
	})

	gulp.watch('src/img/*.*', function(event) {
		gulp.run('images');
	})

	gulp.watch('src/fonts/*/**', function(event) {
		gulp.run('fonts');
	})

	gulp.watch('src/libs/*/**', function(event) {
		gulp.run('libs');
	})
});