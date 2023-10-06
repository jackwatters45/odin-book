import { AudienceStatusOptions } from "@/types/AudienceSettingsTypes";
import useUserForm from "../../../Shared/UserForm/useUserForm";
import useTimePeriod from "@/components/Shared/TimePeriod/useTimePeriod";
import {
	IEducation,
	EducationFormFields,
	EducationWithConcentrations,
} from "../types/EducationTypes";

interface useEducationFormProps {
	audience: AudienceStatusOptions;
	initialValues: IEducation | undefined;
	handleCloseForm: () => void;
	formType?: IEducation["type"];
}

const useEducationForm = ({
	audience,
	handleCloseForm,
	initialValues,
	formType,
}: useEducationFormProps) => {
	const isExistingEducation = !!initialValues?._id;

	const formattedInitialValues = (
		initialValues
			? {
					...initialValues,
					concentrations1: initialValues?.concentrations?.[0],
					concentrations2: initialValues?.concentrations?.[1],
					concentrations3: initialValues?.concentrations?.[2],
			  }
			: {
					attendedFor: "undergraduate",
			  }
	) as EducationWithConcentrations | undefined;

	const addFormTypeToSubmit = (data: EducationFormFields) => {
		return formType
			? ({
					audience: data.audience,
					values: { ...data.values, type: formType },
			  } as EducationFormFields)
			: data;
	};

	const { checkStartDateBeforeEndDate } = useTimePeriod();

	const { handleSubmit, register, control, setValue, formValues, defaultValues } =
		useUserForm<EducationWithConcentrations>({
			audience,
			initialValues: formattedInitialValues,
			url: "education",
			method: isExistingEducation ? "PATCH" : "POST",
			param: initialValues?._id,
			handleCloseForm,
			onSubmit: addFormTypeToSubmit,
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

export default useEducationForm;
