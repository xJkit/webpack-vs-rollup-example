import path from 'path';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs'; // convert commonjs to ES6
import filesize from 'rollup-plugin-filesize';
import image from 'rollup-plugin-image';
import url from 'rollup-plugin-url';

import uglify from 'rollup-plugin-uglify';
import { minify } from 'uglify-es';

export default {
  input: path.resolve('src/index.js'),
  output: [{
    file: './dist/bundle.rollup.cjs.js',
    format: 'cjs',
  }],
  plugins: [
    filesize(),
    resolve(),
    url({ limit: 0 }), // 超過就會丟出
    commonjs({
      include: 'node_modules/**',
    }),
  ],
};
