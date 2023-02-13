import defaultTheme from 'tailwindcss/defaultTheme'

export default {
    theme: {
        container: {
            center: true
        },
        extend: {
            colors: {
                'trso-blue': '#3876dc',
                'trso-blue2': '#92B4EC',
                'trso-yellow': '#FFD24C',
                'trso-yellow2': '#FFE69A'
            },
            fontFamily: {
                'main': 'Fredoka One, sans-serif',
                'title': 'Playfair Display, sans-serif'
            },
        }
    }
}