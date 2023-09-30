import AboutOverviewTextInput from "@/components/Shared/FormComponents/TextInput/AboutOverviewTextInput";
import AudienceStatusOptions from "@/types/AudienceStatusOptions";
import StandardUserOverviewForm from "../../../../Shared/USER/UserAboutOverviewItem/StandardUserOverviewForm";
import useAboutWebsitesForm from "./useAboutWebsitesForm";
import { UserAboutAudienceFormFields } from "@/types/IUser";

interface AboutWebsitesFormProps {
	audience: AudienceStatusOptions;
	handleCloseForm: () => void;
	initialValues: string | undefined;
	category: UserAboutAudienceFormFields;
}

const AboutWebsitesForm = ({
	audience,
	handleCloseForm,
	initialValues,
	category,
}: AboutWebsitesFormProps) => {
	const { handleSubmit, register, control, setValue, formValues, defaultValues } =
		useAboutWebsitesForm({
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
				category={category}
				isSelectedValue={!!formValues.values?.websites}
				register={{ ...register("values.websites"), required: true }}
				labelText="Website"
			/>
		</StandardUserOverviewForm>
	);
};

export default AboutWebsitesForm;
