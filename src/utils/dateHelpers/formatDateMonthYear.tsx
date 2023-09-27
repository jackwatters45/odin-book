const formatDateMonthYear = (dateString: string) => {
	const date = new Date(dateString);
	return `${date.toLocaleString("default", {
		month: "short",
	})} ${date.getFullYear()}`;
};

export default formatDateMonthYear;
