import { writable } from 'svelte/store';
import { StoreLocalStorageKeys } from './enums';
import { getNumberFromStorage, getObjectFromStorage, setObjectFromStorage, setValueToStorage } from './utils';
import type { UserAuth } from './store.schema';

function useCount() {
    // stores, will get initial val from local storage if key exists
	const { subscribe, set, update } = writable(getNumberFromStorage(StoreLocalStorageKeys.count));

    // subscribe to store updates to save it to local storage
    subscribe((val: number) => setValueToStorage(StoreLocalStorageKeys.count, val));

	return {
		subscribe,
		increment: () => update(n => n + 1),
		decrement: () => update(n => n - 1),
		reset: () => set(0),
		set: (n: number) => set(n)
	};
}

export const count = useCount();

function useUserAuth() {
    // stores, will get initial val from local storage if key exists
	const { subscribe, set } = writable(getObjectFromStorage<UserAuth>(StoreLocalStorageKeys.userAuth));

    // subscribe to store updates to save it to local storage
    subscribe((val: UserAuth | null) => setObjectFromStorage<UserAuth>(StoreLocalStorageKeys.userAuth, val));

	function setUserAuth(username: string, securityToken: string, refreshToken: string ) {
		const userAuth:UserAuth = {
			username,
			securityToken,
			refreshToken,
			isPullingToken: false
		};
		set(userAuth);
	};
	
	const hasValue = (): boolean => {
		const userAuth = getObjectFromStorage<UserAuth>(StoreLocalStorageKeys.userAuth);
		if (userAuth?.username && userAuth.refreshToken && userAuth.securityToken) return true;

		return false;
	}

	return {
		subscribe,
		clear: () => set(null),
		setUserAuth,
		hasValue
	};
}

export const userAuth = useUserAuth();


