<script lang="ts" context="module">
	export interface Mode {
		banner: string;
		title: string;
		description: string;
	}
</script>

<script lang="ts">
	export let mode: Mode;
</script>

<div class="w-96 h-[36rem] bg-black bg-opacity-50 cursor-pointer">
	<img class="h-80 object-cover" src={mode.banner} alt={mode.title} />

	<div class="pt-6 px-4 space-y-2">
		<div class="text-xl font-medium">
			{mode.title}
		</div>
		<div class="normal-case text-sm">
			{mode.description}
		</div>
	</div>
</div>
