/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			screens: {
				'2xl-max': { max: '1535px' },
				// => @media (max-width: 1535px) { ... }

				'xl-max': { max: '1279px' },
				// => @media (max-width: 1279px) { ... }

				'lg-max': { max: '1023px' },
				// => @media (max-width: 1023px) { ... }

				'md-max': { max: '767px' },
				// => @media (max-width: 767px) { ... }

				'sm-max': { max: '639px' }
				// => @media (max-width: 639px) { ... }
			}
		}
	},
	plugins: []
};
