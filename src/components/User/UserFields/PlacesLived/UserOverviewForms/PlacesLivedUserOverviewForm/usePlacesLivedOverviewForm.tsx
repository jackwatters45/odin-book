import AudienceStatusOptions from "@/types/AudienceStatusOptions";
import { PlaceLivedData, PlaceLivedType } from "@/types/IUser";
import useUserOverviewForm from "../../../../../Shared/USER/UserAboutOverviewItem/StandardUserOverviewForm/useStandardUserOverviewForm";

interface UsePlacesLivedUserOverviewFormProps {
	audience: AudienceStatusOptions;
	initialValues: PlaceLivedData | undefined;
	handleCloseForm: () => void;
	url: string;
	formType: PlaceLivedType;
}

const usePlacesLivedUserOverviewForm = ({
	audience,
	initialValues,
	handleCloseForm,
	url,
	formType,
}: UsePlacesLivedUserOverviewFormProps) => {
	const { handleSubmit, register, control, setValue, formValues, defaultValues } =
		useUserOverviewForm({
			audience,
			initialValues: {
				city: initialValues?.city,
				state: initialValues?.state,
				country: initialValues?.country,
				type: initialValues?.type || formType,
				startYear: initialValues?.startYear,
				startMonth: initialValues?.startMonth,
				startDay: initialValues?.startDay,
			},
			url,
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

export default usePlacesLivedUserOverviewForm;
