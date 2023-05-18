<script lang="ts">
	// @todo use $lib module - https://kit.svelte.dev/docs/modules
	import { count } from "../shared/store";
</script>

<div class="counter">
    <h1>Counter : {$count}</h1>
	<button on:click={count.increment} class="counter-btn">
		+
	</button>
    <button on:click={count.decrement} class="counter-btn">
		-
	</button>
    <button on:click={() => $count *= $count} class="counter-btn">
		power
	</button>
    <button on:click={count.reset} class="counter-btn">
		reset
	</button>
</div>

<style>
	.counter {
		margin: 8px 0;
	}
	.counter-btn {
		padding: 8px;
	}
</style>
