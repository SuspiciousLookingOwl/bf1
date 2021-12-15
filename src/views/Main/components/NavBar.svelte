<script lang="ts">
	export let routes: string[] = [];
	export let current = "";

	export let onClick: (name: string) => void;
</script>

<div
	class="flex flex-row space-x-6 border-b border-opacity-25 pb-2 text-2xl max-w-5xl"
>
	{#each routes as name}
		<div
			class="cursor-pointer hover:text-shadow hover:transition-all px-2"
			on:click={() => onClick?.(name)}
		>
			<span class={name === current && "font-medium text-white"}>
				{name}
			</span>
			{#if name === current}
				<div
					class="top-[9px] relative left-0 border-b border-white box-border"
				/>
			{/if}
		</div>
	{/each}
</div>
