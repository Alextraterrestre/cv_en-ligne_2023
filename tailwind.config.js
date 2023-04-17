/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './public/index.html', './src/**/*.vue', './src/**/*.js',
    ],
    theme: {
        colors: {
            transparent: 'transparent',
            blue: {
                50: '#F6FAFF',
                200: '#B9D8FF',
                400: '#90C1FC',
                600: '#117DFF',
                800: '#003F8B',
                950: '#001834',
            },
            primary:'#117DFF',
            danger: '#FF0035',
            warning: '#FF8C00',
            valid: '#FF0035'
        },

        extend: {}
    },
    plugins: []
}
