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
				},
				dark: {
					page: {
						background: '#222222',
						text: "#FFFFFF",
						border: "#E5E5E5",
					},
					header: {
						background: '#333333',
						text: "#FFFFFF",
						border: "#FFFFFF",
					},
					footer: {
						background: '#333333',
						text: "#E5E5E5",
						border: "#E5E5E5",
					},
				}
			}
		},
	},
	plugins: [],
}
