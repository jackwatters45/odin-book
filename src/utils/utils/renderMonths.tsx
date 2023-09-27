import { monthOptions } from "../dateHelpers";

const renderMonths = (includeDefault = false) => {
	const defaultMonth = (
		<option key={""} value="">
			Month
		</option>
	);

	const months = monthOptions.map((month) => (
		<option key={month.value} value={month.value}>
			{month.label}
		</option>
	));

	return includeDefault ? [defaultMonth, ...months] : months;
};

export default renderMonths;
