/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            fontFamily: {
                'red-hat-display': ['Red Hat Display', 'sans-serif']
            },
            backgroundImage:{
                'pattern-mobile':"url(/images/pattern-background-mobile.svg)",
                'pattern-desktop':"url(/images/pattern-background-desktop.svg)",
            }
        },
        colors: {
            blue: {
                pale: 'hsl(225, 100%, 94%)',
                bright: 'hsl(245, 75%, 52%)',
                brightHover: 'hsl(245, 83%, 68%)',
                veryPale: 'hsl(225, 100%, 98%)',
                desaturated: 'hsl(224, 23%, 55%)',
                dark: 'hsl(223, 47%, 23%)'
            },
            white: 'hsl(0 , 100% ,100%)'
        }
    },
    plugins: [],
}