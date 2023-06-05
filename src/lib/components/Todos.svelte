<script lang="ts">
	import { todos } from '../store/store';

	const handleClickAddTest = () => {
		todos.addNew('test');
	};
	const handleClickClear = () => {
		todos.clear();
	};
</script>

<div class="todos">
	<h1>Todos</h1>
	<button on:click={handleClickAddTest}>Add test</button>
	<button on:click={handleClickClear}>Clear</button>
	<hr />
	<ul>
		{#each $todos as { id, content }, i}
			<li>[{id}] {content}</li>
		{/each}
	</ul>
</div>

<style>
</style>
