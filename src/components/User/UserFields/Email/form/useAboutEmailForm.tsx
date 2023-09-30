import AudienceStatusOptions from "@/types/AudienceStatusOptions";
import useUserOverviewForm from "../../../../Shared/USER/UserAboutOverviewItem/StandardUserOverviewForm/useStandardUserOverviewForm";

interface useAboutEmailFormProps {
	audience: AudienceStatusOptions;
	initialValues: string | undefined;
	handleCloseForm: () => void;
}
const useAboutEmailForm = ({
	audience,
	handleCloseForm,
	initialValues,
}: useAboutEmailFormProps) => {
	const { handleSubmit, register, control, setValue, formValues, defaultValues } =
		useUserOverviewForm({
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

export default useAboutEmailForm;
