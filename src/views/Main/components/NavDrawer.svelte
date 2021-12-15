<script lang="ts">
	const routes = [
		{
			imageUrl: "/img/bf1.jpg",
			alt: "Battlefield 1",
			isActive: true,
		},
		{
			imageUrl: "/img/bf4.jpg",
			alt: "Battlefield 4",
		},
		{
			imageUrl: "/img/bfhl.jpg",
			alt: "Battlefield Hardline",
		},
	];
</script>

<div class="w-24 border-r border-opacity-25 items-center h-full">
	<div class="pt-36 space-y-6">
		{#each routes as { imageUrl: src, alt, isActive }}
			<div class="cursor-pointer">
				{#if isActive}
					<div
						class="h-14 absolute left-0 border-l-2 border-l-highlight box-border"
					/>
				{/if}
				<img {alt} {src} class="w-10 h-14 mx-auto" />
			</div>
		{/each}
	</div>
</div>
