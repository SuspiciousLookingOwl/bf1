<script lang="ts">
	import Router from "svelte-spa-router";
	import { routes } from "./router";
</script>

<div class="main">
	<Router {routes} />
</div>

<style global lang="postcss">
	@tailwind base;
	@tailwind components;
	@tailwind utilities;

	body {
		@apply p-0 overflow-hidden;
	}

	.main {
		@apply font-light uppercase tracking-wide text-gray-100;
		@apply w-screen h-screen absolute;

		font-family: "Poppins", sans-serif;
	}

	@layer utilities {
		@variants hover {
			.text-shadow {
				text-shadow: 0px 0px 4px;
			}
		}
	}
</style>
