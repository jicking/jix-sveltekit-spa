import { writable } from 'svelte/store';
import { StoreLocalStorageKeys } from './enums';
import { getNumberFromStorage, setValueToStorage } from './utils';

function createCount() {
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

export const count = createCount();


