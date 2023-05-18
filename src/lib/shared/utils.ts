/* eslint-disable @typescript-eslint/no-explicit-any */
export const getNumberFromStorage = (_key: string): number => Number(localStorage.getItem(_key) || 0);
export const setValueToStorage = (key:string, val: any) => localStorage.setItem(key, val.toString())
