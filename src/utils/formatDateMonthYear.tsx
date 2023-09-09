const formatDateMonthYear = (dateString: string) => {
	const date = new Date(dateString);
	return `Joined ${date.toLocaleString("default", {
		month: "short",
	})} ${date.getFullYear()}`;
};

export default formatDateMonthYear;
