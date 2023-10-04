import { AudienceStatusOptions } from "@/types/AudienceSettingsTypes";
import useUserForm from "../../../Shared/UserForm/useUserForm";

interface useEmailFormProps {
	audience: AudienceStatusOptions;
	initialValues: string | undefined;
	handleCloseForm: () => void;
}
const useEmailForm = ({
	audience,
	handleCloseForm,
	initialValues,
}: useEmailFormProps) => {
	const { handleSubmit, register, control, setValue, formValues, defaultValues } =
		useUserForm({
			audience,
			initialValues: { email: initialValues },
			url: "email",
			method: initialValues ? "PATCH" : "POST",
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

export default useEmailForm;
