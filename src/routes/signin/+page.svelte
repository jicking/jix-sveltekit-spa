<script>
	import { userAuth } from "$lib/store/store";
	import { goto } from '$app/navigation';

	const handleSigninClick = () => {
		userAuth.setUserAuth("TestUser","xYt5sKM","xoPl1");
		goto("/account")
	};
</script>

<h1>Signin</h1>
<button on:click={handleSigninClick}>signin</button>