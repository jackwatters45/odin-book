import { AudienceStatusOptions } from "@/types/AudienceSettingsTypes";
import StandardUserOverviewForm from "../../../../Shared/UserAboutOverviewItem/StandardUserOverviewForm";
import AboutOverviewTextInput from "@/components/Shared/FormComponents/TextInput/AboutOverviewTextInput";
import usePhoneNumberForm from "./usePhoneNumberForm";

interface PhoneNumberFormProps {
	audience: AudienceStatusOptions;
	handleCloseForm: () => void;
	initialValues: string | undefined;
}

const PhoneNumberForm = ({
	audience,
	handleCloseForm,
	initialValues,
}: PhoneNumberFormProps) => {
	const { handleSubmit, register, control, setValue, formValues, defaultValues } =
		usePhoneNumberForm({
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

export default PhoneNumberForm;
