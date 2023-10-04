import { AudienceStatusOptions } from "@/types/AudienceSettingsTypes";
import useUserForm from "../../../Shared/UserForm/useUserForm";
import { PronounsType } from "../types/PronounsTypes";

interface usePronounsFormProps {
	audience: AudienceStatusOptions;
	initialValues: PronounsType | undefined;
	handleCloseForm: () => void;
}

const usePronounsForm = ({
	audience,
	handleCloseForm,
	initialValues,
}: usePronounsFormProps) => {
	const { handleSubmit, register, control, setValue, formValues, defaultValues } =
		useUserForm({
			audience,
			initialValues,
			url: "pronouns",
			method: "PATCH",
			handleCloseForm,
		});

	return {
		handleSubmit,
		register,
		control,
		setValue,
		formValues,
		defaultValues,
	};
};

export default usePronounsForm;
