import AudienceStatusOptions from "@/types/AudienceStatusOptions";
import useUserOverviewForm from "../../../../Shared/USER/UserAboutOverviewItem/StandardUserOverviewForm/useStandardUserOverviewForm";
import { SocialLinksData } from "@/types/IUser";

interface UseAboutSocialLinksFormProps {
	audience: AudienceStatusOptions;
	initialValues: SocialLinksData | undefined;
	handleCloseForm: () => void;
}
const useAboutSocialLinksForm = ({
	audience,
	handleCloseForm,
	initialValues,
}: UseAboutSocialLinksFormProps) => {
	const { handleSubmit, register, control, setValue, formValues, defaultValues } =
		useUserOverviewForm({
			audience,
			initialValues,
			url: "social-links",
			method: initialValues?._id ? "PATCH" : "POST",
			param: initialValues?._id,
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

export default useAboutSocialLinksForm;
