import AudienceStatusOptions from "@/types/AudienceStatusOptions";
import useUserOverviewForm from "../../../../Shared/UserAboutOverviewItem/StandardUserOverviewForm/useStandardUserOverviewForm";
import { Gender } from "../types/GenderTypes";

interface UseAboutGenderFormProps {
	audience: AudienceStatusOptions;
	initialValues: Gender | undefined;
	handleCloseForm: () => void;
}
const useAboutGenderForm = ({
	audience,
	handleCloseForm,
	initialValues,
}: UseAboutGenderFormProps) => {
	const { handleSubmit, register, control, setValue, formValues, defaultValues } =
		useUserOverviewForm({
			audience,
			initialValues: initialValues,
			url: "gender",
			method: "PATCH",
			handleCloseForm,
		});

	const isOther = formValues.values?.defaultType === "Other";

	return {
		handleSubmit,
		register,
		control,
		setValue,
		formValues,
		defaultValues,
		isOther,
	};
};

export default useAboutGenderForm;
