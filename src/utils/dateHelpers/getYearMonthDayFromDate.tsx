const getYearMonthDayFromDate = (date: Date | undefined) => {
	if (!date) return undefined;
	return {
		year: new Date(date).getFullYear().toString(),
		month: new Date(date).getMonth().toString(),
		day: new Date(date).getDate().toString(),
	};
};

export default getYearMonthDayFromDate;
