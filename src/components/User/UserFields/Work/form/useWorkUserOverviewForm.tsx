import AudienceStatusOptions from "@/types/AudienceStatusOptions";
import useUserOverviewForm from "../../../../Shared/UserAboutOverviewItem/StandardUserOverviewForm/useStandardUserOverviewForm";
import { WorkData } from "@/types/IUser";
import useTimePeriod from "@/components/Shared/FormComponents/TimePeriod/useTimePeriod";

interface UseWorkUserOverviewFormProps {
	audience: AudienceStatusOptions;
	initialValues: WorkData | undefined;
	handleCloseForm: () => void;
}

const useWorkUserOverviewForm = ({
	audience,
	handleCloseForm,
	initialValues,
}: UseWorkUserOverviewFormProps) => {
	const { checkStartDateBeforeEndDate } = useTimePeriod();

	const { handleSubmit, register, control, setValue, formValues, defaultValues } =
		useUserOverviewForm<WorkData>({
			audience,
			initialValues,
			url: "work",
			method: initialValues?._id ? "PATCH" : "POST",
			param: initialValues?._id,
			handleCloseForm,
			validateSubmit: checkStartDateBeforeEndDate,
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

export default useWorkUserOverviewForm;
