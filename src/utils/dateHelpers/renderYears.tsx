const renderYears = (includeDefault = false, numFutureDates = 0) => {
	const endYear = new Date().getFullYear() + numFutureDates;
	const defaultYear = (
		<option key={"year"} value="">
			Year
		</option>
	);

	const years = [...Array(100)].map((_, i) => (
		<option key={`year-${i}`} value={endYear - i}>
			{endYear - i}
		</option>
	));

	return includeDefault ? [defaultYear, ...years] : years;
};

export default renderYears;
