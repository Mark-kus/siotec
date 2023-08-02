/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			keyframes: {
				wiggle: {
					'0%, 100%': { transform: 'rotate(-3deg)' },
					'50%': { transform: 'rotate(3deg)' },
				},
			},
			animation: {
				wiggle: "wiggle 0.3s ease-in infinite"
			},
			fontFamily: {
				"sans": ['Roboto', 'sans-serif'],
			},
			colors: {
				light: {
					page: {
						background: '#025464',
						text: "#E8AA42",
						border: "#333333",
					},
					header: {
						background: '#E8AA42',
						text: "#025464",
						border: "#333333",
					},
					footer: {
						background: '#E8AA42',
						text: "#025464",
						border: "#333333",
					},
					error: "#FF1E1E",
					input: "#1B6B93",
				},
				// dark: {
				// 	page: {
				// 		background: '#071952',
				// 		text: "#FFFFFF",
				// 		border: "#46458C",
				// 	},
				// 	header: {
				// 		background: '#001C30',
				// 		text: "#FFFFFF",
				// 		border: "#46458C",
				// 	},
				// 	footer: {
				// 		background: '#1D5B79',
				// 		text: "#E5E5E5",
				// 		border: "#46458C",
				// 	},
				// 	error: "#ED2B2A",
				// 	input: "#F7E6C4",
				// }
			}
		},
	},
	plugins: [],
}
