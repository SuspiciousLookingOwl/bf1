const colors = require("tailwindcss/colors");

module.exports = {
	mode: "jit",
	purge: ["./**/*.svelte", "./**/*.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				highlight: colors.yellow["400"],
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
