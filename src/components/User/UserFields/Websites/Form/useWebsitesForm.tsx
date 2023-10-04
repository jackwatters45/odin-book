import { AudienceStatusOptions } from "@/types/AudienceSettingsTypes";
import useUserOverviewForm from "../../../Shared/StandardUserOverviewForm/useStandardUserOverviewForm";

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
		useUserOverviewForm({
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
