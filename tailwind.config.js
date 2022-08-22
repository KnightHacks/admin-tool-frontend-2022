/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				'status-active': '#3bd205',
				'status-inactive': '#d20505',
				'hinfobar-border': '#cccccc',
				'hinfobar-subtext': '#8d8d8d',
				'hinfobar-maintext': '#4b4b4b',
				'hinfobar-bg': '#FBFBFB',
				'subHeading-color': '#626262;',
			},
			fontFamily: {
				Inter: ['Inter', 'Arial', 'sans-serif'],
			},
		},
	},
	plugins: [],
};
