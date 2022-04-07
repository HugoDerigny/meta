const colors = require('tailwindcss/colors')

module.exports = {
	content: ['./src/**/*.{html,js,jsx,ts,tsx}', './pages/**/*.{html,js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				gray: colors.stone,
			},
			fontFamily: {
				sans: ['Montserrat', 'sans-serif'],
				cursive: ['Satisfy', 'cursive'],
			},
		},
	},
	plugins: [],
}
