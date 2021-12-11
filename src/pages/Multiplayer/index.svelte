<script lang="ts">
	import ModeCard, { Mode } from "./components/ModeCard.svelte";

	const modes: Mode[] = [
		{
			banner: "/img/mp_01.jpg",
			title: "Operations",
			description:
				"New to the Battlefield series. Be part of a large scale war, spanning over several maps. Attack or defend on multiple fronts.",
		},
		{
			banner: "/img/mp_02.jpg",
			title: "Quickmatch",
			description: "The quickest way to get into any of the game modes.",
		},
		{
			banner: "/img/mp_03.jpg",
			title: "Server Browser",
			description:
				"The old school way of finding that perfect game. Set up your filters and you're ready to go.",
		},
		{
			banner: "/img/mp_04.jpg",
			title: "Custom Games",
			description:
				"Enjoy custom experiences, highlighting what is popular in the community right now. Find a new favorite",
		},
	];
</script>

<div class="mt-16 flex flex-row space-x-2">
	{#each modes as mode}
		<ModeCard {mode} />
	{/each}
</div>
