import { AudienceStatusOptions } from "@/types/AudienceSettingsTypes";
import useUserOverviewForm from "../../../../Shared/UserAboutOverviewItem/StandardUserOverviewForm/useStandardUserOverviewForm";

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
		useUserOverviewForm({
			audience,
			initialValues: { phoneNumber: initialValues },
			url: "phone-number",
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

export default usePhoneNumberForm;
