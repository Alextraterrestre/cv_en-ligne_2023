/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
        './node_modules/flowbite/**/*.js',
        './pages/**/*.{html,js}',
        './components/**/*.{html,js}'
    ],
    theme: {
        extend: {
        fontFamily: {
            sans: ['Nunito', 'sans-serif'],
            sansTwo: ['Roboto', 'sans-serif']
        },
        colors: {
            transparent: 'transparent',
            blue: {
                50: '#F6FAFF',
                200: '#B9D8FF',
                400: '#90C1FC',
                600: '#117DFF',
                800: '#003f8b',
                950: '#001834'
            },
            primary: '#117DFF',
            danger: '#FF0035',
            warning: '#FF8C00',
            valid: '#FF0035'
        },
        screens: {
            'sm': '640px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1280px',
            '2xl': '1536px',
            // 'mobile': {'max':'650px'},
            // 'tablet': {'min':'751px', 'max':'900'},
            // 'laptop': '1920px',
        },
    }
    },
    plugins: [require('flowbite/plugin')],
    // corePlugins: {
    //     preflight: false,
    //   }
}
