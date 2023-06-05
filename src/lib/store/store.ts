import { writable } from 'svelte/store';
import { StoreLocalStorageKeys } from './enums';
import {
	getArrayFromStorage,
	getNumberFromStorage,
	getObjectFromStorage,
	setObjectToStorage,
	setValueToStorage
} from './utils';
import type { Todo, UserAuth } from './store.schema';

function useCount() {
	// stores, will get initial val from local storage if key exists
	const { subscribe, set, update } = writable(getNumberFromStorage(StoreLocalStorageKeys.count));

	// subscribe to store updates to save it to local storage
	subscribe((val: number) => setValueToStorage(StoreLocalStorageKeys.count, val));

	return {
		subscribe,
		increment: () => update((n) => n + 1),
		decrement: () => update((n) => n - 1),
		reset: () => set(0),
		set: (n: number) => set(n)
	};
}

export const count = useCount();

function useUserAuth() {
	// stores, will get initial val from local storage if key exists
	const { subscribe, set } = writable(
		getObjectFromStorage<UserAuth>(StoreLocalStorageKeys.userAuth)
	);

	// subscribe to store updates to save it to local storage
	subscribe((val: UserAuth | null) => setObjectToStorage(StoreLocalStorageKeys.userAuth, val));

	const setUserAuth = (username: string, securityToken: string, refreshToken: string) => {
		const userAuth: UserAuth = {
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
	};

	return {
		subscribe,
		clear: () => set(null),
		setUserAuth,
		hasValue
	};
}

export const userAuth = useUserAuth();

function useTodos() {
	// stores, will get initial val from local storage if key exists
	const { subscribe, set } = writable(getArrayFromStorage<Todo>(StoreLocalStorageKeys.todos));

	// subscribe to store updates to save it to local storage
	subscribe((val: Todo[]) => setObjectToStorage(StoreLocalStorageKeys.todos, val));

	const addNew = (content: string) => {
		const newTodo: Todo = {
			content,
			id: '123',
			isDone: false
		};
		const todos: [Todo] | null = getObjectFromStorage<[Todo]>(StoreLocalStorageKeys.todos);
		if (todos) {
			todos?.push(newTodo);
			set(todos);
			return;
		}

		// if todos is nullish
		set([newTodo]);
	};

	const clear = () => {
		set([]);
	};

	return {
		subscribe,
		clear,
		addNew
	};
}

export const todos = useTodos();
