const convertDayMonthYearToDate = (
	year?: string,
	month?: string,
	day?: string,
): Date | undefined => {
	if (!year) return undefined;
	const y = parseInt(year) || 0;
	const m = month ? parseInt(month) - 1 : 0; // month is 0-based in JS
	const d = day ? parseInt(day) : 1;
	return new Date(y, m, d);
};

export default convertDayMonthYearToDate;
