var gulp = require('gulp');


gulp.task('copy',function(){
	gulp.src("index.html").pipe(gulp.dest("e:/phpStudy/WWW/queen"));
	gulp.src("php/*.php").pipe(gulp.dest("e:/phpStudy/WWW/queen/php"));
	gulp.src("html/*.html").pipe(gulp.dest("e:/phpStudy/WWW/queen/html"));
	gulp.src("css/*.css").pipe(gulp.dest("e:/phpStudy/WWW/queen/css"));
	gulp.src("js/*.js").pipe(gulp.dest("e:/phpStudy/WWW/queen/js"));
	gulp.src("images/*").pipe(gulp.dest("e:/phpStudy/WWW/queen/images"));
	})


gulp.task('watch',function(){
	gulp.watch("index.html",['copy']);
	gulp.watch("php/*.php",['copy']);
	gulp.watch("html/*.html",['copy']);
	gulp.watch("css/*.css",['copy']);
	gulp.watch("js/*.js",['copy']);
	gulp.watch("images/*",['copy']);
})