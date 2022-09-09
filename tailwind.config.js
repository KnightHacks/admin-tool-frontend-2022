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
				'attendee-name': '#7F7F7F;',
				'popup-input-bg': '#FBFBFB',
				'popup-input-border': '#DFE0E2',
				'popup-heading': '#626262;',
				'dark-action-color': '#4B4B4B',
				'dark-action-border': '#C9C9C9',
				'red-action-color': '#C14C4C',
				'red-action-border': '#FD9999',
				'overlay-bg': '#737272',
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
