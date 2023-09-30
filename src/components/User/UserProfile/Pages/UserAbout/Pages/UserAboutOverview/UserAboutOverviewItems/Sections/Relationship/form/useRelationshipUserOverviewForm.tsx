import AudienceStatusOptions from "@/types/AudienceStatusOptions";
import useUserOverviewForm from "../../../../../../../../../../Shared/USER/UserAboutOverviewItem/StandardUserOverviewForm/useStandardUserOverviewForm";
import { IRelationshipStatus } from "@/types/IRelationshipStatus";
import { IUser } from "@/types/IUser";

interface UseRelationshipUserOverviewFormProps {
	audience: AudienceStatusOptions;
	initialValues: IRelationshipStatus | undefined;
	handleCloseForm: () => void;
}

const useRelationshipUserOverviewForm = ({
	audience,
	initialValues,
	handleCloseForm,
}: UseRelationshipUserOverviewFormProps) => {
	const partner = initialValues?.partner as IUser;
	const { handleSubmit, register, control, setValue, formValues, defaultValues } =
		useUserOverviewForm({
			audience,
			initialValues: {
				status: initialValues?.status,
				partner: partner.fullName,
			},
			url: "relationship",
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

export default useRelationshipUserOverviewForm;
