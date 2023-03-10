const { src, dest, watch, series, parallel } = require("gulp");

//css sasss
const sass = require("gulp-sass")(require("sass"));
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");

/* sourcemaps para saber a que archivo css corresponde cada linea de codigo css */
const sourcemaps = require('gulp-sourcemaps');

//imagenes
const imagemin = require("gulp-imagemin");

function css(done) {
  //compilar sass
  //ideptificar archivo
  //compilar la hoja
  //guardar el .css}

  // ya encontramos nuestra hoja de sass

  //compressed en outputstyle sirve para comprimir la hoja de estilos css
  src("src/scss/app.scss")
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle:'compressed'}))
    .pipe(postcss([autoprefixer()]))
    .pipe(sourcemaps.write('.'))
    .pipe(dest("build/css"));

  done();
}

function imagenes(done) {
  src("src/img/**/*")
    .pipe(imagemin({ optimizationLevel: 3 }))
    .pipe(dest("build/img"));

  done();
}

function dev(done) {
  //css llamamos el la funcion anterior

  /*buscamos todos los archivos.scss*/
  watch("src/scss/**/*.scss", css);
  watch("src/img/**/*", imagenes);

  done();
}
exports.css = css;
exports.dev = dev;
exports.imagenes = imagenes;

//tareas por defaul
exports.default = series(imagenes, css, dev);

//series

//parallel
