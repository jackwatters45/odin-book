import AudienceStatusOptions from "@/types/AudienceStatusOptions";
import useUserOverviewForm from "../../../../Shared/USER/UserAboutOverviewItem/StandardUserOverviewForm/useStandardUserOverviewForm";
import { PronounsType } from "../types/PronounsTypes";

interface UseAboutPronounsFormProps {
	audience: AudienceStatusOptions;
	initialValues: PronounsType | undefined;
	handleCloseForm: () => void;
}

const useAboutPronounsForm = ({
	audience,
	handleCloseForm,
	initialValues,
}: UseAboutPronounsFormProps) => {
	const { handleSubmit, register, control, setValue, formValues, defaultValues } =
		useUserOverviewForm({
			audience,
			initialValues,
			url: "pronouns",
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

export default useAboutPronounsForm;
