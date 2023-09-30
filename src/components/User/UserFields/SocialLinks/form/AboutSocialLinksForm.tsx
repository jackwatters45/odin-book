import AboutOverviewTextInput from "@/components/Shared/FormComponents/TextInput/AboutOverviewTextInput";
import AudienceStatusOptions from "@/types/AudienceStatusOptions";
import StandardUserOverviewForm from "../../../../Shared/USER/UserAboutOverviewItem/StandardUserOverviewForm";
import {
	SocialLinksData,
	UserAboutAudienceFormFields,
	VALID_SOCIAL_PLATFORMS_ARRAY,
} from "@/types/IUser";
import useAboutSocialLinksForm from "./useAboutSocialLinksForm";
import StandardSelect from "@/components/Shared/StandardSelect";
import capitalizeFirstLetterString from "@/utils/capitalizeFirstLetterString";
import { StyledFormContentContainer } from "./AboutSocialLinksForm.styles";

interface AboutSocialLinksFormProps {
	audience: AudienceStatusOptions;
	handleCloseForm: () => void;
	initialValues: SocialLinksData | undefined;
	category: UserAboutAudienceFormFields;
}

const AboutSocialLinksForm = ({
	audience,
	handleCloseForm,
	initialValues,
	category,
}: AboutSocialLinksFormProps) => {
	const { handleSubmit, register, control, setValue, formValues, defaultValues } =
		useAboutSocialLinksForm({
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

export default AboutSocialLinksForm;
