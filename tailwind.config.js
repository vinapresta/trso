
export default {
    theme: {
        container: {
            center: true
        },
        extend: {
            colors: {
                'trso-blue': '#2599fb',
                'trso-blue2': '#aad9f9',
                'trso-yellow': '#fec606',
                'trso-yellow2': '#fedf71'
            },
            fontFamily: {
                'main': 'Fredoka One, sans-serif',
                'title': 'Playfair Display, sans-serif'
            },
        }
    },
    plugins: [
        require('tailwind-scrollbar'),
    ],
}