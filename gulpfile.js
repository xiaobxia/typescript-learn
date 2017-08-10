/**
 * Created by xiaobxia on 2017/8/10.
 */
let gulp = require('gulp');
let ts = require('gulp-typescript');
let merge = require('merge2');

//使用config文件
let tsProject = ts.createProject('tsconfig.json');

gulp.task('scripts', function () {
  let tsResult = gulp.src('src/*.ts')
    .pipe(tsProject());
  return merge([ // Merge the two output streams, so this task is finished when the IO of both operations is done.
    tsResult.dts.pipe(gulp.dest('release/definitions')),
    tsResult.js.pipe(gulp.dest('release/js'))
  ]);
});

gulp.task('default', ['scripts'], function () {
  gulp.watch('src/*.ts', ['scripts']);
});
