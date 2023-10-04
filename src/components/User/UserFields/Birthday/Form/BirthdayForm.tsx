import { AudienceStatusOptions } from "@/types/AudienceSettingsTypes";
import StandardUserOverviewForm from "../../../../Shared/UserAboutOverviewItem/StandardUserOverviewForm";
import useBirthdayForm from "./useBirthdayForm";
import TimePeriod from "@/components/Shared/FormComponents/TimePeriod";

interface BirthdayFormProps {
	audience: AudienceStatusOptions;
	handleCloseForm: () => void;
	initialValues: Date | undefined;
}

const BirthdayForm = ({
	audience,
	handleCloseForm,
	initialValues,
}: BirthdayFormProps) => {
	const {
		handleSubmit,
		register,
		control,
		setValue,
		formValues,
		defaultValues,
		disableSave,
	} = useBirthdayForm({
		audience,
		initialValues,
		handleCloseForm,
	});

	return (
		<StandardUserOverviewForm
			handleCloseForm={handleCloseForm}
			audience={audience}
			initial={defaultValues}
			formValues={formValues}
			handleSave={handleSubmit}
			disableSave={disableSave}
			control={control}
			setValue={setValue}
		>
			<TimePeriod
				checked={undefined}
				selectedValues={{
					startYear: formValues.values?.year || "",
					startMonth: formValues.values?.month || "",
				}}
				inputs={{
					startYear: register("values.year", { required: true }),
					startMonth: register("values.month", { required: true }),
					startDay: register("values.day", { required: true }),
				}}
			/>
		</StandardUserOverviewForm>
	);
};

export default BirthdayForm;
