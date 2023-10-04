import { AudienceStatusOptions } from "@/types/AudienceSettingsTypes";
import useUserOverviewForm from "../../../Shared/StandardUserOverviewForm/useStandardUserOverviewForm";
import { PronounsType } from "../types/PronounsTypes";

interface usePronounsFormProps {
	audience: AudienceStatusOptions;
	initialValues: PronounsType | undefined;
	handleCloseForm: () => void;
}

const usePronounsForm = ({
	audience,
	handleCloseForm,
	initialValues,
}: usePronounsFormProps) => {
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

export default usePronounsForm;
