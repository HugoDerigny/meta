const colors = require('tailwindcss/colors')

module.exports = {
	content: ['./src/**/*.{html,js,jsx,ts,tsx}', './pages/**/*.{html,js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				gray: colors.stone,
			},
			fontFamily: {
				sans: ['Karla', 'sans-serif'],
				cursive: ['Permanent Marker', 'cursive'],
			},
		},
	},
	plugins: [require('@tailwindcss/line-clamp')],
}
