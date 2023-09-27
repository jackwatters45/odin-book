import { getDaysInMonth } from ".";

const renderDates = (
	selectedMonth: string,
	selectedYear: string,
	includeDefault = false,
) => {
	const defaultDay = (
		<option key={"day"} value="">
			Day
		</option>
	);

	const dates = [...Array(getDaysInMonth(selectedMonth, selectedYear))].map((_, i) => (
		<option key={`day-${i}`} value={i + 1}>
			{i + 1}
		</option>
	));

	return includeDefault ? [defaultDay, ...dates] : dates;
};

export default renderDates;
