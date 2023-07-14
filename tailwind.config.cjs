/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				light: {
					page: {
						background: '#FFFFFF',
						text: "#333333",
						border: "#333333",
					},
					header: {
						background: '#002F5F',
						text: "#FFFFFF",
						border: "#333333",
					},
					footer: {
						background: '#002F5F',
						text: "#E5E5E5",
						border: "#333333",
					},
					error: "#FF1E1E",
					input: "#0F3460",
				},
				dark: {
					page: {
						background: '#071952',
						text: "#FFFFFF",
						border: "#46458C",
					},
					header: {
						background: '#001C30',
						text: "#FFFFFF",
						border: "#46458C",
					},
					footer: {
						background: '#1D5B79',
						text: "#E5E5E5",
						border: "#46458C",
					},
					error: "#ED2B2A",
					input: "#F7E6C4",
				}
			}
		},
	},
	plugins: [],
}
