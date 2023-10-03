import AudienceStatusOptions from "@/types/AudienceStatusOptions";
import useUserOverviewForm from "../../../../Shared/UserAboutOverviewItem/StandardUserOverviewForm/useStandardUserOverviewForm";

interface UseAboutWebsitesFormProps {
	audience: AudienceStatusOptions;
	initialValues: string | undefined;
	handleCloseForm: () => void;
}
const useAboutWebsitesForm = ({
	audience,
	handleCloseForm,
	initialValues,
}: UseAboutWebsitesFormProps) => {
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

export default useAboutWebsitesForm;
