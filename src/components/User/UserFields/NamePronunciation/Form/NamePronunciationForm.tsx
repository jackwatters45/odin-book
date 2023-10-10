import StandardUserOverviewForm from "@/components/User/Shared/UserForm";
import useUserForm from "@/components/User/Shared/UserForm/useUserForm";

import { INamePronunciation } from "../types/NamePronunciationTypes";
import StandardTextInput from "@/components/Shared/TextInput/StandardTextInput";
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
		useUserForm<INamePronunciation>({
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
			<StandardTextInput
				category={"firstNamePronunciation"}
				isSelectedValue={!!formValues.values?.firstName}
				register={{ ...register("values.firstName") }}
				labelText="First name"
			/>
			<StandardTextInput
				category={"lastNamePronunciation"}
				isSelectedValue={!!formValues.values?.lastName}
				register={{ ...register("values.lastName") }}
				labelText="Last name"
			/>
		</StandardUserOverviewForm>
	);
};

export default NamePronunciationForm;
