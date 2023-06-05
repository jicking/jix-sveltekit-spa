<script>
	import { userAuth } from '../store/store';
</script>

<header>
	<div class="brand">@LOGO</div>
	<nav>
		<ul>
			<li>
				<a href="/">Home</a>
			</li>
			<li>
				<a href="/about">About</a>
			</li>

			{#if $userAuth}
				<li>
					<a href="/account">Account</a>
				</li>
			{:else}
				<li>
					<a href="/signin">Signin</a>
				</li>
			{/if}
		</ul>
	</nav>
</header>

<style></style>
