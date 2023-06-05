/* eslint-disable @typescript-eslint/no-explicit-any */
import { browser } from '$app/environment';

export const getNumberFromStorage = (_key: string): number => {
	if (browser) {
		return Number(localStorage.getItem(_key) || 0);
	}
	return 0;
};
export const getStringFromStorage = (_key: string): string => {
	if (browser) {
		return localStorage.getItem(_key) || '';
	}
	return '';
};
export const getBoolFromStorage = (_key: string): boolean => {
	if (browser) {
		return Boolean(localStorage.getItem(_key) || false);
	}
	return false;
};

export function getObjectFromStorage<T>(key: string): T | null {
	if (browser) {
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

	return null;
}

export function getArrayFromStorage<T>(key: string): T[] {
	if (browser) {
		const value = localStorage.getItem(key);

		if (value) {
			try {
				return JSON.parse(value) as T[];
			} catch (error) {
				console.error(`Error parsing value for key '${key}' from local storage.`);
			}
		}

		return [];
	}

	return [];
}

export const setValueToStorage = (key: string, val: any) => {
	if (browser) {
		localStorage.setItem(key, val.toString());
	}
};

export function setObjectToStorage(key: string, val: any): void {
	if (browser) {
		try {
			if (!val) {
				localStorage.removeItem(key);
				return;
			}
			const stringVal = JSON.stringify(val);
			localStorage.setItem(key, stringVal);
		} catch (error) {
			console.error(`Error parsing value for key '${key}' from local storage.`);
		}
	}
}
