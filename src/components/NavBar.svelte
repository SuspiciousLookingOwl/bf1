<script lang="ts">
	import { location, push } from "svelte-spa-router";

	const routes = [
		{
			name: "Home",
			path: "/",
		},
		{
			name: "Multiplayer",
			path: "/multiplayer",
		},
		{
			name: "Campaign",
			path: "/campaign",
		},
		{
			name: "Soldier",
			path: "/soldier",
		},
		{
			name: "Store",
			path: "/store",
		},
		{
			name: "More",
			path: "/more",
		},
	];
</script>

<div
	class="flex flex-row space-x-10 border-b border-opacity-25 pb-2 text-2xl max-w-5xl"
>
	{#each routes as { name, path }}
		<div class="cursor-pointer" on:click={() => push(path)}>
			<span class={path === $location && "font-medium text-white"}>
				{name}
			</span>
			{#if path === $location}
				<div
					class="top-[9px] relative left-0 border-b border-white box-border"
				/>
			{/if}
		</div>
	{/each}
</div>
