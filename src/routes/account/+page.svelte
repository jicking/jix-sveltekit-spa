<script>
	import { goto } from '$app/navigation';
	import { userAuth } from "$lib/store/store";

	const handleClickLogout = () => {
		userAuth.clear();
		goto("/signin")
	}
</script>

<h1>Account</h1>
<p><strong>Username:</strong> {$userAuth?.username}</p>
<p><strong>token:</strong> {$userAuth?.securityToken}</p>
<p><strong>refresh token:</strong> {$userAuth?.refreshToken}</p>
<button on:click={handleClickLogout}>signout</button>

