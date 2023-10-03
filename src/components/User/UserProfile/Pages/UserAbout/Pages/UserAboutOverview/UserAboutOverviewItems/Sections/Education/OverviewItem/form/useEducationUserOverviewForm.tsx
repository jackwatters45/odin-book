import AudienceStatusOptions from "@/types/AudienceStatusOptions";
import { EducationData } from "@/types/IUser";
import useUserOverviewForm from "../../../../../../../../../../../Shared/UserAboutOverviewItem/StandardUserOverviewForm/useStandardUserOverviewForm";
import useTimePeriod from "@/components/Shared/FormComponents/TimePeriod/useTimePeriod";
import { FormFieldsWithAudience } from "@/types/FormFieldsWithAudience";

interface UseEducationUserOverviewFormProps {
	audience: AudienceStatusOptions;
	initialValues: EducationData | undefined;
	handleCloseForm: () => void;
	formType?: EducationData["type"];
}

type EducationWithConcentrations = EducationData & {
	concentrations1: string | undefined;
	concentrations2: string | undefined;
	concentrations3: string | undefined;
};

type EducationFormFields = FormFieldsWithAudience<EducationWithConcentrations>;

const useEducationUserOverviewForm = ({
	audience,
	handleCloseForm,
	initialValues,
	formType,
}: UseEducationUserOverviewFormProps) => {
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
		useUserOverviewForm<EducationWithConcentrations>({
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

export default useEducationUserOverviewForm;
