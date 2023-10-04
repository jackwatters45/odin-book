import { AudienceStatusOptions } from "@/types/AudienceSettingsTypes";
import useUserForm from "../../../Shared/UserForm/useUserForm";

interface useWebsitesFormProps {
	audience: AudienceStatusOptions;
	initialValues: string | undefined;
	handleCloseForm: () => void;
}
const useWebsitesForm = ({
	audience,
	handleCloseForm,
	initialValues,
}: useWebsitesFormProps) => {
	const { handleSubmit, register, control, setValue, formValues, defaultValues } =
		useUserForm({
			audience,
			initialValues: { websites: initialValues },
			url: "websites",
			method: initialValues ? "PATCH" : "POST",
			param: initialValues ? encodeURIComponent(initialValues) : undefined,
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

export default useWebsitesForm;
