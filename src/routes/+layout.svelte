<script>
	import SiteHeader from '$lib/components/SiteHeader.svelte';
	import './styles.css';
</script>

<div class="page-root app">
	<SiteHeader />
	<main>
		<slot />
	</main>
	<footer>@footer</footer>
</div>

<style>
	/*  */
</style>
