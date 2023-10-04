import { IncludesStartEndDates } from "@/types/IncludesDates";
import convertDayMonthYearToDate from "./convertDayMonthYearToDate";

const sortByStartEndDates = <T extends IncludesStartEndDates>(a: T, b: T): number => {
	const aEndDate = convertDayMonthYearToDate(a.endYear, a.endMonth, a.endDay);
	const bEndDate = convertDayMonthYearToDate(b.endYear, b.endMonth, b.endDay);

	if (aEndDate && bEndDate) {
		const endDateDifference = bEndDate.getTime() - aEndDate.getTime();
		if (endDateDifference !== 0) return endDateDifference;
	}

	const aStartDate = convertDayMonthYearToDate(a.startYear, a.startMonth, a.startDay);
	const bStartDate = convertDayMonthYearToDate(b.startYear, b.startMonth, b.startDay);

	if (!aStartDate && bStartDate) return 1;
	if (aStartDate && !bStartDate) return -1;
	if (!aStartDate && !bStartDate) return 0;

	return (bStartDate?.getTime() ?? 0) - (aStartDate?.getTime() ?? 0);
};

export const sortArrByStartEndDates = <T extends object>(
	arr: (T & IncludesStartEndDates)[] | undefined,
) => {
	if (!arr) return undefined;
	return arr.sort(sortByStartEndDates);
};

const getItemFromSortedArr = <T extends object>(
	arr: (T & IncludesStartEndDates)[] | undefined,
	index: number,
) => {
	if (!arr) return undefined;
	return arr.sort(sortByStartEndDates)[index];
};

export const getMostRecentItemFromArr = <T extends object>(
	arr: (T & IncludesStartEndDates)[] | undefined,
) => {
	return getItemFromSortedArr(arr, 0);
};

export const getSecondMostRecentItemFromArr = <T extends object>(
	arr: (T & IncludesStartEndDates)[] | undefined,
) => {
	return getItemFromSortedArr(arr, 1);
};
