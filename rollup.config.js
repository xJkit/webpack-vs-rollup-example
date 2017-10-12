import path from 'path';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs'; // convert commonjs to ES6
import filesize from 'rollup-plugin-filesize';

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
    filesize(),
    resolve(),
    commonjs({
      include: 'node_modules/**',
    }),
    uglify({}, minify),
  ],
};
