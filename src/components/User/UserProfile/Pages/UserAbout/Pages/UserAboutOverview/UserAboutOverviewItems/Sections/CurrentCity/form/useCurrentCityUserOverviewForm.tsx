import AudienceStatusOptions from "@/types/AudienceStatusOptions";
import useUserOverviewForm from "../../../UserAboutOverviewItem/StandardUserOverviewForm/useStandardUserOverviewForm";
import { PlaceLivedData } from "@/types/IUser";

interface UseCurrentCityUserOverviewFormProps {
	audience: AudienceStatusOptions;
	initialValues: PlaceLivedData | undefined;
	handleCloseForm: () => void;
}

const useCurrentCityUserOverviewForm = ({
	audience,
	initialValues,
	handleCloseForm,
}: UseCurrentCityUserOverviewFormProps) => {
	const { handleSubmit, register, control, setValue, formValues, defaultValues } =
		useUserOverviewForm({
			audience,
			initialValues: {
				city: initialValues?.city,
				state: initialValues?.state,
				country: initialValues?.country,
			},
			url: "current-city",
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

export default useCurrentCityUserOverviewForm;
