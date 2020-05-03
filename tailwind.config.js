// tailwind.config.js
module.exports = {
	theme: {
		screens: {
			sm: '320px',
			md: '768px',
			lg: '1440px',
			xl: '1280px',
		},
		fontFamily: {
			display: ['Ubuntu', 'sans-serif'],
			body: ['Ubuntu', 'sans-serif'],
		},
		borderWidth: {
			default: '1px',
			'0': '0',
			'2': '2px',
			'4': '4px',
		},
		extend: {
			colors: {
				gray: {
					'900': '#424B5A',
					'800': '#505D68',
					'500': '#A1AEB7',
					'200': '#F2F5F7',
				},
			},
			spacing: {
				'15.25': '3.8125rem',
				'96': '24rem',
				'128': '32rem',
			},
		},
	},
};
