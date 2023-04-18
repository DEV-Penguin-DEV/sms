import gulp from 'gulp';
import browserSync from 'browser-sync';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import concat from 'gulp-concat';
import autoprefixer from 'gulp-autoprefixer';
import imagemin from 'gulp-imagemin';
import rsync from 'gulp-rsync';
import del from 'del';

const sass = gulpSass(dartSass);

function browsersync(done) {
  browserSync.init({
    server: { baseDir: 'dist/' },
    cors: true,
    notify: false,
    ui: false,
  });
  done();
}

function scripts() {
  return (
    gulp
      .src([
        'app/js/parts/main.js', 
        'app/js/parts/*', 
      ])
      .pipe(concat('app.min.js'))
      .pipe(gulp.dest('dist/js'))
      .pipe(browserSync.stream())
  );
}

function styles() {
  return gulp
    .src('app/sass/main.sass')
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(concat('app.min.css'))
    .pipe(autoprefixer({ overrideBrowserslist: ['> 1%'], grid: true }))
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.stream());
}

function stylesCss() {
  return gulp
    .src('app/css/*')
    .pipe(autoprefixer({ overrideBrowserslist: ['> 1%'], grid: true }))
    .pipe(gulp.dest('dist/css'));
}

function html() {
  return gulp
    .src('app/*.html')
    .pipe(gulp.dest('dist/'));
}

function images() {
  return gulp
    .src('app/img/**/*')
    .pipe(gulp.dest('dist/img/'));
}

function imagesProduct() {
  return gulp
    .src('app/img/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/img/'));
}

function cleaning() {
  return del('dist/', { force: true });
}

function deploy() {
  return gulp.src('app/').pipe(
    rsync({
      root: 'dist/',
      hostname: 'username@yousite.com',
      destination: 'yousite/public_html/',
      include: [
      ], 
      exclude: ['**/Thumbs.db', '**/*.DS_Store'],
      recursive: true,
      archive: true,
      silent: false,
      compress: true,
    })
  );
}

const reload = (done) => {
  browserSync.reload();
  done();
};

function startwatch() {
  gulp.watch('app/sass/**/*.sass', gulp.series(styles, reload));
  gulp.watch(['app/js/**/*.js', '!app/js/**/*.min.js'], gulp.series(scripts, reload));
  gulp.watch('app/**/*.html', gulp.series(html, reload));
}

function buildFonts() {
  return gulp.src('app/fonts/**/*').pipe(gulp.dest('dist/fonts'));
}

export const assets = gulp.series(cleaning, scripts, images);
export const build = gulp.series(
  cleaning,
  scripts,
  html,
  imagesProduct,
  styles,
  stylesCss,
  buildFonts,
);
export default gulp.series(
  cleaning,
  scripts,
  html,
  images,
  styles,
  stylesCss,
  buildFonts,
  gulp.series(browsersync, startwatch)
);
