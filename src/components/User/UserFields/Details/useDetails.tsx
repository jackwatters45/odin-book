import { FormEvent } from "react";

import useFormCustom from "@/hooks/useFormCustom";
import useDialog from "@/hooks/useDialog";
import DetailsFormFields from "@/components/User/UserFields/Details/types/DetailsTypes";
import getDefaultFormStateDetails from "@/components/User/UserFields/Details/utils/getDefaultFormFieldsDetails";
import { IUser } from "@/types/IUser";
import flattenAndCheckForTrueOrPublic from "@/utils/other/flattenAndCheckForTrue";

interface UseDetailsProps {
	user: IUser;
	closeParentDialog: (() => void) | undefined;
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
		if (closeParentDialog) closeParentDialog();
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
