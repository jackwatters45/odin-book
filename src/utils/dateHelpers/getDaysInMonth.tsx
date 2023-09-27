const getDaysInMonth = (month?: number | string, year?: number | string) => {
	if (month === undefined || year === undefined)
		throw new Error("Month and year are required");

	if (typeof month === "string") month = parseInt(month);
	if (typeof year === "string") year = parseInt(year);

	const nextMonth = new Date(year, month + 1, 1);
	nextMonth.setDate(nextMonth.getDate() - 1);
	return nextMonth.getDate();
};

export default getDaysInMonth;
