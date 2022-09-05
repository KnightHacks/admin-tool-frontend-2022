/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				'status-active': '#3bd205',
				'status-inactive': '#d20505',
				'border-gray': '#cccccc',
				'hinfobar-subtext': '#8d8d8d',
				'hinfobar-maintext': '#4b4b4b',
				'hinfobar-bg': '#FBFBFB',
				'launch-gray': '#848484',
			},
			fontFamily: {
				Inter: ['Inter', 'Arial', 'sans-serif'],
			},
			boxShadow: {
				headerbar: '0px 2px 11px rgba(0, 0, 0, 0.13)',
			},
		},
	},
	plugins: [],
};
