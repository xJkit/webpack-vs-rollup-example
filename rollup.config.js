import path from 'path';
import uglify from 'rollup-plugin-uglify';
import { minify } from 'uglify-es';

export default {
  input: path.resolve('src/index.js'),
  output: [{
    file: './dist/bundle.rollup.es.js',
    format: 'es',
  }, {
    file: './dist/bundle.rollup.cjs.js',
    format: 'cjs',
  }, {
    file: './dist/bundle.rollup.amd.js',
    format: 'amd',
  }, {
    file: './dist/bundle.rollup.iife.js',
    format: 'iife',
    name: 'iifeBundle',
  }],
  plugins: [
    uglify({}, minify),
  ],
};
