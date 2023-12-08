/* eslint-disable @typescript-eslint/no-explicit-any */

interface getListTitleParams<T extends any[]> {
	arr: T;
	field?: keyof T[number];
	limit?: number;
}

const getListTitle = <T extends any[]>({ arr, field, limit }: getListTitleParams<T>) => {
	return limit
		? [
				...arr
					.slice(0, limit)
					.map((item) => (field ? item[field] : item))
					.join(", "),
				"...",
		  ].join("")
		: arr.map((item) => (field ? item[field] : item)).join(", ");
};

export default getListTitle;
