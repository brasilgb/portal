const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                roboto: ['Roboto', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                "solar-blue-100": "#57BAD9",
                "solar-blue-200": "#009FE3",
                "solar-blue-300": "#174193",
                "solar-yellow-100": "#FFEC01",
                "solar-yellow-200": "#F08801",
                "solar-yellow-300": "#E84E1C",
                "solar-red-100": "#E74C3C",
                "solar-red-200": "#EE2839",
                "solar-red-300": "#BD1522"
              },
        },
    },

    plugins: [require('@tailwindcss/forms')],
};
