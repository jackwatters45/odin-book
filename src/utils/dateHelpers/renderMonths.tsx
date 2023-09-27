import { monthOptions } from "@/utils/dateHelpers";

const renderMonths = (includeDefault = false) => {
	const defaultMonth = (
		<option key={"month"} value="">
			Month
		</option>
	);

	const months = monthOptions.map(({ value, label }) => (
		<option key={`month-${value}`} value={value}>
			{label}
		</option>
	));

	return includeDefault ? [defaultMonth, ...months] : months;
};

export default renderMonths;
