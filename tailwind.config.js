const colors = require('tailwindcss/colors')

module.exports = {
	content: ['./src/**/*.{html,js,jsx,ts,tsx}', './app/**/*.{html,js,jsx,ts,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['var(--font-custom)'],
			},
		},
	},
	plugins: [],
}
