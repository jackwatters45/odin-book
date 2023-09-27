import AudienceStatusOptions from "@/types/AudienceStatusOptions";
import useUserOverviewForm from "../../../UserAboutOverviewItem/StandardUserOverviewForm/useStandardUserOverviewForm";
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
	const isExistingWork = !!initialValues?._id;

	const { checkStartDateBeforeEndDate } = useTimePeriod();

	const { handleSubmit, register, control, setValue, formValues, defaultValues } =
		useUserOverviewForm<WorkData>({
			audience,
			initialValues,
			url: "work",
			method: isExistingWork ? "PATCH" : "POST",
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
