import { AudienceStatusOptions } from "@/types/AudienceSettingsTypes";
import useUserOverviewForm from "../../../Shared/StandardUserOverviewForm/useStandardUserOverviewForm";
import { ISocialLinks } from "../types/SocialLinksTypes";

interface useSocialLinksFormProps {
	audience: AudienceStatusOptions;
	initialValues: ISocialLinks | undefined;
	handleCloseForm: () => void;
}
const useSocialLinksForm = ({
	audience,
	handleCloseForm,
	initialValues,
}: useSocialLinksFormProps) => {
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

export default useSocialLinksForm;
