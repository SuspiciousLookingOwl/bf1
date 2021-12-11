<script lang="ts">
	import NavBar from "@components/NavBar.svelte";
	import NavDrawer from "@components/NavDrawer.svelte";

	import Router from "svelte-spa-router";
	import { routes } from "./router";
</script>

<div class="background" />

<div class="main">
	<div class="flex flex-row h-full">
		<NavDrawer />
		<div class="flex flex-col mt-12 px-8 w-full">
			<NavBar />
			<Router {routes} />
		</div>
	</div>
</div>

<style global lang="postcss">
	@tailwind base;
	@tailwind components;
	@tailwind utilities;

	body {
		@apply p-0;
	}

	.background {
		@apply w-screen h-screen bg-cover absolute;
		background-image: url("/img/bg_01.jpg");
	}

	.main {
		@apply font-light uppercase tracking-wide text-gray-100;
		@apply w-screen h-screen absolute;
		@apply bg-black bg-opacity-25 backdrop-blur-sm;

		font-family: "Poppins", sans-serif;
	}
</style>
