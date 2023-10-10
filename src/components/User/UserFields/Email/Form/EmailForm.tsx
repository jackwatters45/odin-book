import { AudienceStatusOptions } from "@/types/AudienceSettingsTypes";
import StandardTextInput from "@/components/Shared/TextInput/StandardTextInput";
import StandardUserOverviewForm from "../../../Shared/UserForm";
import useEmailForm from "./useEmailForm";

interface EmailFormProps {
	audience: AudienceStatusOptions;
	handleCloseForm: () => void;
	initialValues: string | undefined;
}

const EmailForm = ({ audience, handleCloseForm, initialValues }: EmailFormProps) => {
	const { handleSubmit, register, control, setValue, formValues, defaultValues } =
		useEmailForm({
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
			<StandardTextInput
				category={"email"}
				isSelectedValue={!!formValues.values?.email}
				register={{ ...register("values.email"), required: true }}
				labelText="Email"
			/>
		</StandardUserOverviewForm>
	);
};

export default EmailForm;
