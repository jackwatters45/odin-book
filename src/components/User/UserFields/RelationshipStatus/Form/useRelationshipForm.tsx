import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router";

import { AudienceStatusOptions } from "@/types/AudienceSettingsTypes";
import { IRelationshipSearch, IRelationshipStatus } from "../types/RelationshipTypes";
import useUserSearchSingle from "@/components/User/Shared/UserSearchSingle/useUserSearchSingle";
import { apiBaseUrl } from "@/config/envVariables";
import { IUser } from "@/types/IUser";

interface UseRelationshipFormProps {
	audience: AudienceStatusOptions;
	initialValues: IRelationshipStatus | undefined;
	handleCloseForm: () => void;
}

const mutateRelationship = async (data: IRelationshipSearch, userId: string) => {
	const res = await fetch(`${apiBaseUrl}/users/${userId}/relationship`, {
		method: "PATCH",
		body: JSON.stringify(data),
		credentials: "include",
		headers: { "Content-Type": "application/json" },
	});

	const json = await res.json();

	if (!res.ok) throw new Error(json.message);

	return json;
};

const useRelationshipForm = ({
	audience,
	initialValues,
	handleCloseForm,
}: UseRelationshipFormProps) => {
	const { id: userId } = useParams<{ id: string }>() as { id: string };

	const defaultValues = {
		audience,
		search: initialValues?.user?.fullName,
		status: initialValues?.status,
		user: initialValues?.user?._id,
		startYear: initialValues?.startYear,
		startMonth: initialValues?.startMonth,
		startDay: initialValues?.startDay,
	};

	const { register, control, setValue, watch, handleSubmit } = useForm({
		defaultValues,
	});

	const formValues = watch();

	const queryClient = useQueryClient();
	const { mutate } = useMutation({
		mutationFn: (data: IRelationshipSearch) => mutateRelationship(data, userId),
		mutationKey: ["user", userId],
		onSuccess: (data: { user: IUser }) => {
			handleCloseForm();

			queryClient.setQueryData<IUser>(["user", userId], (prev) =>
				prev
					? {
							...prev,
							relationshipStatus: data.user.relationshipStatus,
							audienceSettings: data.user.audienceSettings,
					  }
					: prev,
			);
		},
	});

	const submitForm = handleSubmit((data) => {
		const isChanged = JSON.stringify(formValues) !== JSON.stringify(defaultValues);

		if (!isChanged) return handleCloseForm();

		mutate(data);
	});

	// search
	const { isSearchValid, ...userSingleSearchFuncs } = useUserSearchSingle({
		audience,
		initialValues,
		initialSearchValue: initialValues?.user?.fullName,
		formValues,
		urlEnding: "friends",
	});

	const status = formValues.status;
	const statusExists = !!status;

	const isValid = (isSearchValid || status === "single") && statusExists;

	const showSearch = status !== "single" && !!status;

	return {
		submitForm,
		register,
		control,
		setValue,
		formValues,
		defaultValues,
		isValid,
		showSearch,
		...userSingleSearchFuncs,
	};
};

export default useRelationshipForm;
