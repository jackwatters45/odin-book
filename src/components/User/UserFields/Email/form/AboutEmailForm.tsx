import AudienceStatusOptions from "@/types/AudienceStatusOptions";
import AboutOverviewTextInput from "@/components/Shared/FormComponents/TextInput/AboutOverviewTextInput";
import StandardUserOverviewForm from "../../../../Shared/USER/UserAboutOverviewItem/StandardUserOverviewForm";
import useAboutEmailForm from "./useAboutEmailForm";

interface AboutEmailFormProps {
	audience: AudienceStatusOptions;
	handleCloseForm: () => void;
	initialValues: string | undefined;
}

const AboutEmailForm = ({
	audience,
	handleCloseForm,
	initialValues,
}: AboutEmailFormProps) => {
	const { handleSubmit, register, control, setValue, formValues, defaultValues } =
		useAboutEmailForm({
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
			control={control}
			setValue={setValue}
		>
			<AboutOverviewTextInput
				category={"email"}
				isSelectedValue={!!formValues.values?.email}
				register={{ ...register("values.email"), required: true }}
				labelText="Email"
			/>
		</StandardUserOverviewForm>
	);
};

export default AboutEmailForm;
