import { AudienceStatusOptions } from "@/types/AudienceSettingsTypes";
import useUserForm from "../../../Shared/UserForm/useUserForm";
import { IPlaceLived, PlaceLivedType } from "../types/PlacesLivedTypes";

interface usePlacesLivedFormProps {
	audience: AudienceStatusOptions;
	initialValues: IPlaceLived | undefined;
	handleCloseForm: () => void;
	url: string;
	formType: PlaceLivedType;
}

const usePlacesLivedForm = ({
	audience,
	initialValues,
	handleCloseForm,
	url,
	formType,
}: usePlacesLivedFormProps) => {
	const { handleSubmit, register, control, setValue, formValues, defaultValues } =
		useUserForm({
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

export default usePlacesLivedForm;
