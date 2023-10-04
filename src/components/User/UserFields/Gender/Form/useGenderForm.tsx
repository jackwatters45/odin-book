import { AudienceStatusOptions } from "@/types/AudienceSettingsTypes";
import useUserForm from "../../../Shared/UserForm/useUserForm";
import { Gender } from "../types/GenderTypes";

interface useGenderFormProps {
	audience: AudienceStatusOptions;
	initialValues: Gender | undefined;
	handleCloseForm: () => void;
}
const useGenderForm = ({
	audience,
	handleCloseForm,
	initialValues,
}: useGenderFormProps) => {
	const { handleSubmit, register, control, setValue, formValues, defaultValues } =
		useUserForm({
			audience,
			initialValues: initialValues,
			url: "gender",
			method: "PATCH",
			handleCloseForm,
		});

	const isOther = formValues.values?.defaultType === "Other";

	return {
		handleSubmit,
		register,
		control,
		setValue,
		formValues,
		defaultValues,
		isOther,
	};
};

export default useGenderForm;
