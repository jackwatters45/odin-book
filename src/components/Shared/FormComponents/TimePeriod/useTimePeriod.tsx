import convertDayMonthYearToDate from "@/utils/convertDayMonthYearToDate";

type DatePart = string | undefined;

export interface DateValues {
	startYear: DatePart;
	startMonth: DatePart;
	startDay: DatePart;
	endYear: DatePart;
	endMonth: DatePart;
	endDay: DatePart;
}

const useTimePeriod = () => {
	const checkStartDateBeforeEndDate = (formValues = {} as DateValues) => {
		const startDate = formValues?.startYear
			? convertDayMonthYearToDate(
					formValues.startYear,
					formValues.startMonth,
					formValues.startDay,
			  )
			: null;

		const endDate = formValues?.endYear
			? convertDayMonthYearToDate(
					formValues.endYear,
					formValues.endMonth,
					formValues.endDay,
			  )
			: null;

		const isValid = !(startDate && endDate && startDate > endDate);
		return {
			isValid,
			message: isValid ? "" : "Start date must be before end date",
		};
	};

	return { checkStartDateBeforeEndDate };
};

export default useTimePeriod;
