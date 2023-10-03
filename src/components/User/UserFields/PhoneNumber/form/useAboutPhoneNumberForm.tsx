import AudienceStatusOptions from "@/types/AudienceStatusOptions";
import useUserOverviewForm from "../../../../Shared/UserAboutOverviewItem/StandardUserOverviewForm/useStandardUserOverviewForm";

interface UseAboutPhoneNumberFormProps {
	audience: AudienceStatusOptions;
	initialValues: string | undefined;
	handleCloseForm: () => void;
}
const useAboutPhoneNumberForm = ({
	audience,
	handleCloseForm,
	initialValues,
}: UseAboutPhoneNumberFormProps) => {
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

export default useAboutPhoneNumberForm;
