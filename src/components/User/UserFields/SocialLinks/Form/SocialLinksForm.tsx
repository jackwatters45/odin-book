import AboutOverviewTextInput from "@/components/Shared/FormComponents/TextInput/AboutOverviewTextInput";
import { AudienceStatusOptions, AudienceFormFields } from "@/types/AudienceSettingsTypes";
import StandardUserOverviewForm from "../../../../Shared/UserAboutOverviewItem/StandardUserOverviewForm";

import useSocialLinksForm from "./useSocialLinksForm";
import StandardSelect from "@/components/Shared/StandardSelect";
import capitalizeFirstLetterString from "@/utils/format/capitalizeFirstLetterString";
import { StyledFormContentContainer } from "./SocialLinksForm.styles";
import { ISocialLinks, VALID_SOCIAL_PLATFORMS_ARRAY } from "../types/SocialLinksTypes";

interface SocialLinksFormProps {
	audience: AudienceStatusOptions;
	handleCloseForm: () => void;
	initialValues: ISocialLinks | undefined;
	category: AudienceFormFields;
}

const SocialLinksForm = ({
	audience,
	handleCloseForm,
	initialValues,
	category,
}: SocialLinksFormProps) => {
	const { handleSubmit, register, control, setValue, formValues, defaultValues } =
		useSocialLinksForm({
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
			<StyledFormContentContainer>
				<AboutOverviewTextInput
					category={category}
					isSelectedValue={!!formValues.values?.username}
					register={{ ...register("values.username"), required: true }}
					labelText="Username"
				/>
				<StandardSelect
					id="platform"
					register={{ ...register("values.platform"), required: true }}
					options={[
						...VALID_SOCIAL_PLATFORMS_ARRAY.map((platform) => (
							<option value={platform} key={platform}>
								{capitalizeFirstLetterString(platform)}
							</option>
						)),
					]}
				/>
			</StyledFormContentContainer>
		</StandardUserOverviewForm>
	);
};

export default SocialLinksForm;
