import { getDaysInMonth } from "../dateHelpers";

const renderDates = (
	selectedMonth: string,
	selectedYear: string,
	includeDefault = false,
) => {
	const defaultDay = (
		<option key={""} value="">
			Day
		</option>
	);

	const dates = [...Array(getDaysInMonth(selectedMonth, selectedYear))].map((_, i) => (
		<option key={i} value={i}>
			{i + 1}
		</option>
	));

	return includeDefault ? [defaultDay, ...dates] : dates;
};

export default renderDates;
