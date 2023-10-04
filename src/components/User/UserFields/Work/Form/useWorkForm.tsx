import { AudienceStatusOptions } from "@/types/AudienceSettingsTypes";
import useUserForm from "../../../Shared/UserForm/useUserForm";
import useTimePeriod from "@/components/Shared/TimePeriod/useTimePeriod";
import { IWork } from "../types/WorkTypes";

interface useWorkFormProps {
	audience: AudienceStatusOptions;
	initialValues: IWork | undefined;
	handleCloseForm: () => void;
}

const useWorkForm = ({ audience, handleCloseForm, initialValues }: useWorkFormProps) => {
	const { checkStartDateBeforeEndDate } = useTimePeriod();

	const { handleSubmit, register, control, setValue, formValues, defaultValues } =
		useUserForm<IWork>({
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

export default useWorkForm;
