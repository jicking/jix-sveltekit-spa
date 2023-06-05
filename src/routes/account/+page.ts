import { redirect } from '@sveltejs/kit';
import { userAuth } from '$lib/store/store';

export function load() {
	const isUserAuthSet = userAuth.hasValue();

	if (!isUserAuthSet) throw redirect(307, '/signin');
}
