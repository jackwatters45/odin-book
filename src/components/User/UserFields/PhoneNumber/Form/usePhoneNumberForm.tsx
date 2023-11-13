import { AudienceStatusOptions } from "@/types/AudienceSettingsTypes";
import useUserForm from "../../../Shared/UserForm/useUserForm";

interface usePhoneNumberFormProps {
	audience: AudienceStatusOptions;
	initialValues: string | undefined;
	handleCloseForm: () => void;
}
const usePhoneNumberForm = ({
	audience,
	handleCloseForm,
	initialValues,
}: usePhoneNumberFormProps) => {
	const { handleSubmit, register, control, setValue, formValues, defaultValues } =
		useUserForm({
			audience,
			initialValues: { phoneNumber: initialValues },
			url: "phone-number",
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

export default usePhoneNumberForm;
