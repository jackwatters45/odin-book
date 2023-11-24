import useDialog from "@/hooks/useDialog";
import DetailsFormFields from "@/components/User/UserFields/Details/types/DetailsTypes";
import getDefaultFormStateDetails from "@/components/User/UserFields/Details/utils/getDefaultFormFieldsDetails";
import { IUser } from "@/types/IUser";
import flattenAndCheckForTrueOrPublic from "@/utils/other/flattenAndCheckForTrue";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiBaseUrl } from "@/config/envVariables";
import { useEffect } from "react";

interface UseDetailsProps {
	user: IUser;
	closeParentDialog: (() => void) | undefined;
}

const mutateDetails = async (data: DetailsFormFields, userId: string) => {
	const res = await fetch(`${apiBaseUrl}/users/${userId}/intro`, {
		method: "PATCH",
		credentials: "include",
		body: JSON.stringify(data),
		headers: {
			"Content-Type": "application/json",
		},
	});

	if (!res.ok) throw new Error((await res.json()).message);
	return await res.json();
};

const useDetails = ({ user, closeParentDialog }: UseDetailsProps) => {
	const queryClient = useQueryClient();

	// form
	const defaultValues = getDefaultFormStateDetails(user);

	const { register, handleSubmit, setValue, control, reset } = useForm({
		defaultValues,
	});

	useEffect(() => {
		reset(user.intro);
	}, [user.intro, reset]);

	// dialog
	const { ref, openDialog, closeDialog, isOpen } = useDialog({ reset });
	const closeDialogAndReset = () => {
		closeDialog();
		reset(user.intro);
	};

	// mutation
	const { mutate } = useMutation({
		mutationKey: ["user", user._id],
		mutationFn: (data: DetailsFormFields) => mutateDetails(data, user._id),
		onSuccess: (data) => {
			queryClient.setQueryData(["user", user._id], (prev: IUser | undefined) => {
				const updatedUser = prev
					? { ...prev, intro: data.user.intro }
					: { ...user, intro: data.user.intro };
				return updatedUser;
			});
		},
	});

	// submit form
	const submitForm = handleSubmit((data) => {
		const isChanged = JSON.stringify(data) !== JSON.stringify(defaultValues);

		if (isChanged) mutate(data);

		closeDialog();
	});

	// check if there are values in the form that are true or 'public
	const isValues = flattenAndCheckForTrueOrPublic(user?.intro);

	// close all dialogs (used when clicking links)
	const closeAllDialogs = () => {
		closeDialog();
		if (closeParentDialog) closeParentDialog();
	};

	return {
		ref,
		openDialog,
		closeDialogAndReset,
		isOpen,
		closeAllDialogs,
		register,
		submitForm,
		setValue,
		control,
		isValues,
	};
};

export default useDetails;
