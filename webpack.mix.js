const mix = require('laravel-mix');

mix.js('resources/js/index.js', 'public/js');
mix.sass('resources/sass/index.scss', 'public/css');