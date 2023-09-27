import AudienceStatusOptions from "@/types/AudienceStatusOptions";
import StandardUserOverviewForm from "../../../UserAboutOverviewItem/StandardUserOverviewForm";

import usePhoneNumberUserOverviewForm from "./usePhoneNumberUserOverviewForm";
import AboutOverviewTextInput from "@/components/Shared/FormComponents/TextInput/AboutOverviewTextInput";

interface PhoneNumberUserOverviewFormProps {
	audience: AudienceStatusOptions;
	handleCloseForm: () => void;
	initialValues: string | undefined;
}

const PhoneNumberUserOverviewForm = ({
	audience,
	handleCloseForm,
	initialValues,
}: PhoneNumberUserOverviewFormProps) => {
	const { handleSubmit, register, control, setValue, formValues, defaultValues } =
		usePhoneNumberUserOverviewForm({
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

export default PhoneNumberUserOverviewForm;
