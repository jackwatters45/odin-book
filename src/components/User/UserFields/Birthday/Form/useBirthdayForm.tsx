import { AudienceStatusOptions } from "@/types/AudienceSettingsTypes";
import useUserOverviewForm from "../../../../Shared/UserAboutOverviewItem/StandardUserOverviewForm/useStandardUserOverviewForm";
import getYearMonthDayFromDate from "@/utils/dateHelpers/getYearMonthDayFromDate";

interface useBirthdayFormProps {
	audience: AudienceStatusOptions;
	initialValues: Date | undefined;
	handleCloseForm: () => void;
}
const useBirthdayForm = ({
	audience,
	handleCloseForm,
	initialValues,
}: useBirthdayFormProps) => {
	const dateAsStrings = getYearMonthDayFromDate(initialValues) as {
		year: string;
		month: string;
		day: string;
	};

	const { handleSubmit, register, control, setValue, formValues, defaultValues } =
		useUserOverviewForm({
			audience,
			initialValues: {
				year: dateAsStrings.year,
				month: dateAsStrings.month,
				day: dateAsStrings.day,
			},
			url: "birthday",
			method: "PATCH",
			handleCloseForm,
		});

	const disableSave =
		!formValues.values?.year || !formValues.values?.month || !formValues.values?.day;

	return {
		handleSubmit,
		register,
		control,
		setValue,
		formValues,
		defaultValues,
		disableSave,
	};
};

export default useBirthdayForm;
