import StandardUserOverviewForm from "@/components/User/Shared/StandardUserOverviewForm";
import useUserOverviewForm from "@/components/User/Shared/StandardUserOverviewForm/useStandardUserOverviewForm";

import { INamePronunciation } from "../types/NamePronunciationTypes";
import AboutOverviewTextInput from "@/components/Shared/TextInput/AboutOverviewTextInput";
import { AudienceStatusOptions } from "@/types/AudienceSettingsTypes";

interface NamePronunciationFormProps {
	audience: AudienceStatusOptions;
	initialValues: INamePronunciation | undefined;
	handleCloseForm: () => void;
}

const NamePronunciationForm = ({
	audience,
	initialValues,
	handleCloseForm,
}: NamePronunciationFormProps) => {
	const { handleSubmit, register, control, setValue, formValues, defaultValues } =
		useUserOverviewForm<INamePronunciation>({
			audience,
			initialValues,
			url: "name-pronunciation",
			method: "PATCH",
			param: undefined,
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
				category={"firstNamePronunciation"}
				isSelectedValue={!!formValues.values?.firstName}
				register={{ ...register("values.firstName") }}
				labelText="First name"
			/>
			<AboutOverviewTextInput
				category={"lastNamePronunciation"}
				isSelectedValue={!!formValues.values?.lastName}
				register={{ ...register("values.lastName") }}
				labelText="Last name"
			/>
		</StandardUserOverviewForm>
	);
};

export default NamePronunciationForm;
