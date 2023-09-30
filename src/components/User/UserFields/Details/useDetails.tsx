import { FormEvent } from "react";

import useFormCustom from "@/hooks/useFormCustom";
import useDialog from "@/hooks/useDialog";
import DetailsFormFields from "@/types/DetailsFormFields";
import getDefaultFormStateDetails from "@/components/User/UserFields/Details/EditDetailsForm/getDefaultFormFieldsDetails";
import { IUser } from "@/types/IUser";
import flattenAndCheckForTrueOrPublic from "@/utils/flattenAndCheckForTrue";

interface UseDetailsProps {
	user: IUser;
	closeParentDialog: () => void;
}

const useDetails = ({ user, closeParentDialog }: UseDetailsProps) => {
	const defaultValues = getDefaultFormStateDetails(user);

	const { register, submitForm, setValue, control, reset, watch } =
		useFormCustom<DetailsFormFields>({
			formOptions: { defaultValues },
			mutateOptions: {
				queryUrl: `users/${user._id}/intro`,
				method: "PATCH",
				queryKey: ["user", user._id],
				updateDataKey: "user",
			},
		});

	const formValue = watch();

	const { ref, openDialog, closeDialog } = useDialog({ reset });

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const isChanged = JSON.stringify(formValue) !== JSON.stringify(defaultValues);

		if (isChanged) submitForm();
		closeDialog();
	};

	const isValues = flattenAndCheckForTrueOrPublic(user?.intro);

	const closeAllDialogs = () => {
		closeDialog();
		closeParentDialog();
	};

	return {
		ref,
		openDialog,
		closeDialog,
		register,
		handleSubmit,
		setValue,
		control,
		isValues,
		closeAllDialogs,
	};
};

export default useDetails;
