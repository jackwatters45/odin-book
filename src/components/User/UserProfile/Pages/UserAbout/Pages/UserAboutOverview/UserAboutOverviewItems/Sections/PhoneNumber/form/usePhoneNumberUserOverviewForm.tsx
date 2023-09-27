import AudienceStatusOptions from "@/types/AudienceStatusOptions";
import useUserOverviewForm from "../../../UserAboutOverviewItem/StandardUserOverviewForm/useStandardUserOverviewForm";

interface UsePhoneNumberUserOverviewFormProps {
	audience: AudienceStatusOptions;
	initialValues: string | undefined;
	handleCloseForm: () => void;
}
const usePhoneNumberUserOverviewForm = ({
	audience,
	handleCloseForm,
	initialValues,
}: UsePhoneNumberUserOverviewFormProps) => {
	const { handleSubmit, register, control, setValue, formValues, defaultValues } =
		useUserOverviewForm({
			audience,
			initialValues: { phoneNumber: initialValues },
			url: "phone-number",
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

export default usePhoneNumberUserOverviewForm;
