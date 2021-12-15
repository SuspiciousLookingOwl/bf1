<script lang="ts">
	import { fly } from "svelte/transition";
	import NavBar from "./components/NavBar.svelte";
	import NavDrawer from "./components/NavDrawer.svelte";
	import Home from "../Home/index.svelte";
	import Multiplayer from "../Multiplayer/index.svelte";
	import statefulSwap from "../../store/statefulSwap";

	const screenWidth = window.innerWidth;
	const routes = [
		{
			name: "Home",
			component: Home,
		},
		{
			name: "Multiplayer",
			component: Multiplayer,
		},
		{
			name: "Campaign",
		},
		{
			name: "Soldier",
		},
		{
			name: "Store",
		},
		{
			name: "More",
		},
	];

	let transitionRight = true;

	const flyTransitionProps = {
		duration: 150,
		opacity: 0.1,
	};
	$: outFlyProps = {
		...flyTransitionProps,
		x: (transitionRight ? screenWidth : -screenWidth) * 0.75,
	};
	$: inFlyProps = {
		...flyTransitionProps,
		x: (transitionRight ? -screenWidth : screenWidth) * 0.1,
	};

	const { onOutro, transitionTo, state, lastState } = statefulSwap("Home");

	$: Component = routes.find((r) => r.name === $state)?.component;

	$: currentRouteIndex = routes.findIndex((r) => r.name === $lastState);
	$: backgroundStyle = `transform: scale(1.25) translateX(${-currentRouteIndex * 2}%)`;

	const onNavigate = (route: string) => {
		const targetRouteIndex = routes.findIndex((r) => r.name === route);
		transitionRight = targetRouteIndex < currentRouteIndex;
		transitionTo(route);
	};
</script>

<div class="background" style={backgroundStyle} />

<div class="main">
	<div class="flex flex-row h-full">
		<div class="flex-1">
			<NavDrawer />
		</div>
		<div class="flex flex-col mt-12 px-8 w-full">
			<NavBar routes={routes.map((r) => r.name)} current={$state} onClick={onNavigate} />
			{#key $state}
				<div in:fly={inFlyProps} out:fly={outFlyProps} on:outroend={onOutro}>
					<svelte:component this={Component} />
				</div>
			{/key}
		</div>
	</div>
</div>

<style lang="postcss">
	.main {
		@apply bg-black bg-opacity-25;
	}

	.background {
		@apply w-screen h-screen bg-cover absolute;
		@apply transition-transform duration-200;
		filter: blur(6px);
		background-image: url("/img/bg_01.jpg");
	}
</style>
