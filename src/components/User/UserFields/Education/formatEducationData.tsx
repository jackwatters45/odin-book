import { EducationData } from "@/types/IUser";
import convertDayMonthYearToDate from "@/utils/convertDayMonthYearToDate";

const isFutureDate = (date: Date | string | undefined): boolean => {
	if (!date) return true;
	try {
		return new Date(date).getTime() > new Date().getTime();
	} catch (error) {
		console.error("Invalid date:", date);
		return false;
	}
};

interface FormatEducationAttendingDatesProps {
	education: EducationData | undefined;
	includeSchool?: boolean;
	includeFieldOfStudy?: boolean;
}

export const formatEducationTitle = ({
	education,
	includeSchool = true,
	includeFieldOfStudy = true,
}: FormatEducationAttendingDatesProps) => {
	if (!education) return "";
	const { type, school, degree } = education;

	const endDate = convertDayMonthYearToDate(
		education.endYear,
		education.endMonth,
		education.endDay,
	);

	const isEndDateInFuture = !isFutureDate(endDate);
	const graduated = education.graduated;

	let text = "";
	if (type === "college") {
		if (includeFieldOfStudy && degree) {
			text =
				isEndDateInFuture || graduated ? `Studied ${degree} at` : `Studies ${degree} at`;
		} else {
			text = isEndDateInFuture || graduated ? "Studied at" : "Studying at";
		}
	} else {
		text = isEndDateInFuture || graduated ? "Attended" : "Attends";
	}

	return includeSchool ? `${text} ${school}` : text;
};

const formatBothDates = (
	startDate: Date,
	endDate: Date,
	formattedStartDate: number | null,
	formattedEndDate: number | null,
) =>
	isFutureDate(endDate) || isFutureDate(startDate)
		? `Attending from ${formattedStartDate} to ${formattedEndDate}`
		: `Attended from ${formattedStartDate} to ${formattedEndDate}`;

const formatStartDateOnly = (startDate: Date, formattedStartDate: number | null) =>
	isFutureDate(startDate)
		? `Will Start in ${formattedStartDate}`
		: `Started in ${formattedStartDate}`;

const formatEndDateOnly = (
	endDate: Date,
	formattedEndDate: number | null,
	isGraduated: boolean,
) =>
	isFutureDate(endDate)
		? `Graduates in ${formattedEndDate}`
		: isGraduated
		? `Graduated in ${formattedEndDate}`
		: `Left in ${formattedEndDate}`;

export const formatEducationAttendingDates = (education: EducationData | undefined) => {
	if (!education) return "";

	const startDate = convertDayMonthYearToDate(
		education.startYear,
		education.startMonth,
		education.startDay,
	);

	const endDate = convertDayMonthYearToDate(
		education.endYear,
		education.endMonth,
		education.endDay,
	);

	const type = education?.type;
	const isGraduated = education?.graduated;

	const formattedStartDate = startDate ? new Date(startDate).getFullYear() : null;
	const formattedEndDate = endDate ? new Date(endDate).getFullYear() : null;

	if (type === "college") {
		if (startDate && endDate) {
			return formatBothDates(startDate, endDate, formattedStartDate, formattedEndDate);
		} else if (startDate) {
			return formatStartDateOnly(startDate, formattedStartDate);
		} else if (endDate) {
			return formatEndDateOnly(endDate, formattedEndDate, isGraduated);
		}
		return "";
	} else {
		// TOTO highschool
	}
};
