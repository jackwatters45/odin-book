import AudienceStatusOptions from "@/types/AudienceStatusOptions";
import StandardUserOverviewForm from "../../../../Shared/USER/UserAboutOverviewItem/StandardUserOverviewForm";
import AboutOverviewTextInput from "@/components/Shared/FormComponents/TextInput/AboutOverviewTextInput";
import useAboutPhoneNumberForm from "./useAboutPhoneNumberForm";

interface AboutPhoneNumberFormProps {
	audience: AudienceStatusOptions;
	handleCloseForm: () => void;
	initialValues: string | undefined;
}

const AboutPhoneNumberForm = ({
	audience,
	handleCloseForm,
	initialValues,
}: AboutPhoneNumberFormProps) => {
	const { handleSubmit, register, control, setValue, formValues, defaultValues } =
		useAboutPhoneNumberForm({
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
				category={"phoneNumber"}
				isSelectedValue={!!formValues.values?.phoneNumber}
				register={{ ...register("values.phoneNumber"), required: true }}
				labelText="Phone number"
			/>
		</StandardUserOverviewForm>
	);
};

export default AboutPhoneNumberForm;
