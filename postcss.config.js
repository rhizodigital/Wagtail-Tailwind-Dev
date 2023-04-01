const tailwindcss = require('tailwindcss')
const cssnano = require('cssnano')
const preset = require('postcss-preset-env')

module.exports = {


    plugins:
        process.env.NODE_ENV === 'production'
            ? [
                tailwindcss,
                preset,
                cssnano,
            ]
            : [
                tailwindcss,
                preset,
            ],

};