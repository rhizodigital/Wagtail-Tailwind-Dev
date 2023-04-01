/** @type {import('tailwindcss').Config} */
import { globSync } from 'glob';

const html = globSync('./**/templates/**/*.html');
const scripts = globSync('./static_src/scripts/**/*.js');

module.exports = {
  content: [...html, ...scripts],
  theme: {
    extend: {},
  },
  plugins: [],
}

