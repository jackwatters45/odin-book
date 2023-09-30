import AudienceStatusOptions from "@/types/AudienceStatusOptions";
import StandardUserOverviewForm from "../../../../Shared/USER/UserAboutOverviewItem/StandardUserOverviewForm";
import useAboutBirthdayForm from "./useAboutBirthdayForm";
import TimePeriod from "@/components/Shared/FormComponents/TimePeriod";

interface AboutBirthdayFormProps {
	audience: AudienceStatusOptions;
	handleCloseForm: () => void;
	initialValues: Date | undefined;
}

const AboutBirthdayForm = ({
	audience,
	handleCloseForm,
	initialValues,
}: AboutBirthdayFormProps) => {
	const {
		handleSubmit,
		register,
		control,
		setValue,
		formValues,
		defaultValues,
		disableSave,
	} = useAboutBirthdayForm({
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

export default AboutBirthdayForm;
