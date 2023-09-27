import AudienceStatusOptions from "@/types/AudienceStatusOptions";
import useUserOverviewForm from "../../../UserAboutOverviewItem/StandardUserOverviewForm/useStandardUserOverviewForm";
import { PlaceLivedData } from "@/types/IUser";

interface UseHometownUserOverviewFormProps {
	audience: AudienceStatusOptions;
	initialValues: PlaceLivedData | undefined;
	handleCloseForm: () => void;
}

const useHometownUserOverviewForm = ({
	audience,
	initialValues,
	handleCloseForm,
}: UseHometownUserOverviewFormProps) => {
	const { handleSubmit, register, control, setValue, formValues, defaultValues } =
		useUserOverviewForm({
			audience,
			initialValues: {
				city: initialValues?.city,
				state: initialValues?.state,
				country: initialValues?.country,
			},
			url: "hometown",
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

export default useHometownUserOverviewForm;
