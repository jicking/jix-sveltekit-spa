/* eslint-disable @typescript-eslint/no-explicit-any */
export const getNumberFromStorage = (_key: string): number =>
	Number(localStorage.getItem(_key) || 0);
export const getStringFromStorage = (_key: string): string =>
	(localStorage.getItem(_key) || '');
export const getBoolFromStorage = (_key: string): boolean =>
    Boolean(localStorage.getItem(_key) || false);

export function getObjectFromStorage<T>(key: string): T | null {
	const value = localStorage.getItem(key);

	if (value) {
		try {
			return JSON.parse(value) as T;
		} catch (error) {
			console.error(`Error parsing value for key '${key}' from local storage.`);
		}
	}

	return null;
}

export const setValueToStorage = (key: string, val: any) =>
	localStorage.setItem(key, val.toString());

export function setObjectFromStorage<T>(key: string, val: any): void {
	try {
		if (!val) {
			localStorage.removeItem(key);
			return;
		};
		const stringVal = JSON.stringify(val);
		localStorage.setItem(key, stringVal);
	} catch (error) {
		console.error(`Error parsing value for key '${key}' from local storage.`);
	}
}
