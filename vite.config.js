import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import sveltePreprocess from "svelte-preprocess";
import path from "path";

export default defineConfig({
	plugins: [
		svelte({
			preprocess: sveltePreprocess({
				postcss: true,
			}),
		}),
	],
	server: {
		port: 5000,
	},
	resolve: {
		alias: {
			"@components": path.resolve(__dirname, "./src/components"),
			"@pages": path.resolve(__dirname, "./src/pages"),
		},
	},
});
