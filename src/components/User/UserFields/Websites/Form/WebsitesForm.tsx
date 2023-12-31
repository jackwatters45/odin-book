import StandardTextInput from "@/components/Shared/TextInput/StandardTextInput";
import { AudienceStatusOptions, AudienceFormFields } from "@/types/AudienceSettingsTypes";
import StandardUserOverviewForm from "../../../Shared/UserForm";
import useWebsitesForm from "./useWebsitesForm";

interface WebsitesFormProps {
	audience: AudienceStatusOptions;
	handleCloseForm: () => void;
	initialValues: string | undefined;
	category: AudienceFormFields;
}

const WebsitesForm = ({
	audience,
	handleCloseForm,
	initialValues,
	category,
}: WebsitesFormProps) => {
	const { handleSubmit, register, control, setValue, formValues, defaultValues } =
		useWebsitesForm({
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
				category={category}
				isSelectedValue={!!formValues.values?.websites}
				register={{ ...register("values.websites"), required: true }}
				labelText="Website"
			/>
		</StandardUserOverviewForm>
	);
};

export default WebsitesForm;
