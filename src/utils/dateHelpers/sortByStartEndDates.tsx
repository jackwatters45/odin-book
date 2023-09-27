import convertDayMonthYearToDate from "../convertDayMonthYearToDate";

interface HasDates {
	startYear?: string;
	startMonth?: string;
	startDay?: string;
	endYear?: string;
	endMonth?: string;
	endDay?: string;
}

const sortByStartEndDates = <T extends HasDates>(a: T, b: T): number => {
	const aEndDate = convertDayMonthYearToDate(a.endYear, a.endMonth, a.endDay);
	const bEndDate = convertDayMonthYearToDate(b.endYear, b.endMonth, b.endDay);

	if (!aEndDate && bEndDate) return 1;
	if (aEndDate && !bEndDate) return -1;
	if (!aEndDate && !bEndDate) return 0;

	const endDateDifference = (bEndDate as Date).getTime() - (aEndDate as Date).getTime();
	if (endDateDifference !== 0) return endDateDifference;

	const aStartDate = convertDayMonthYearToDate(a.startYear, a.startMonth, a.startDay);
	const bStartDate = convertDayMonthYearToDate(b.startYear, b.startMonth, b.startDay);

	if (!aStartDate && bStartDate) return 1;
	if (aStartDate && !bStartDate) return -1;
	if (!aStartDate && !bStartDate) return 0;

	return (bStartDate as Date).getTime() - (aStartDate as Date).getTime();
};

export const sortArrByStartEndDates = <T extends object>(
	arr: (T & HasDates)[] | undefined,
) => {
	if (!arr) return undefined;
	return arr.sort(sortByStartEndDates);
};

const getItemFromSortedArr = <T extends object>(
	arr: (T & HasDates)[] | undefined,
	index: number,
) => {
	if (!arr) return undefined;
	return arr.sort(sortByStartEndDates)[index];
};

export const getMostRecentItemFromArr = <T extends object>(
	arr: (T & HasDates)[] | undefined,
) => {
	return getItemFromSortedArr(arr, 0);
};

export const getSecondMostRecentItemFromArr = <T extends object>(
	arr: (T & HasDates)[] | undefined,
) => {
	return getItemFromSortedArr(arr, 1);
};
