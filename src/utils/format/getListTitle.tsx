/* eslint-disable @typescript-eslint/no-explicit-any */

interface getListTitleParams<T extends any[]> {
	arr: T;
	field?: keyof T[number];
}

const getListTitle = <T extends any[]>({ arr, field }: getListTitleParams<T>) =>
	arr.map((item) => (field ? item[field] : item)).join(", ");

export default getListTitle;
