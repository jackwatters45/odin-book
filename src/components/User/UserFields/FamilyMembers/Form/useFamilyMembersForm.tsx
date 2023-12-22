import { FamilyMembersFormProps } from "./FamilyMembersForm";
import { DefaultUserSearch } from "../../../Shared/UserSearchSingle/types/DefaultUserSearch";
import useUserSearchSingle from "../../../Shared/UserSearchSingle/useUserSearchSingle";
import { apiBaseUrl } from "@/config/envVariables";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { IUser } from "@/types/IUser";

interface FamilyMemberSearch extends DefaultUserSearch {
	relationship?: string;
}

const mutateFamilyMembers = async (
	data: FamilyMemberSearch,
	userId: string,
	updateId?: string,
) => {
	const res = await fetch(
		`${apiBaseUrl}/users/${userId}/family-members${updateId ? `/${updateId}` : ""}`,
		{
			method: updateId ? "PATCH" : "POST",
			body: JSON.stringify(data),
			credentials: "include",
			headers: { "Content-Type": "application/json" },
		},
	);

	const json = await res.json();

	if (!res.ok) throw new Error(json.message);

	return json;
};

const useFamilyMembersForm = ({
	audience,
	handleCloseForm,
	initialValues,
}: FamilyMembersFormProps) => {
	const { id: userId } = useParams<{ id: string }>() as { id: string };

	const defaultValues = {
		audience,
		user: initialValues?.user._id,
		relationship: initialValues?.relationship,
		search: initialValues?.user?.fullName,
	};

	const { register, control, setValue, watch, handleSubmit } = useForm({
		defaultValues,
	});

	const formValues = watch();

	const queryClient = useQueryClient();

	const { mutate } = useMutation({
		mutationFn: (data: FamilyMemberSearch) =>
			mutateFamilyMembers(data, userId, initialValues?._id),
		mutationKey: ["user", userId],
		onSuccess: (data: { user: IUser }) => {
			handleCloseForm();

			queryClient.setQueryData<IUser>(["user", userId], (prev) =>
				prev
					? {
							...prev,
							familyMembers: data.user.familyMembers,
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
		urlEnding: "friends-not-family",
	});

	const relationshipFieldsExist = !!formValues?.relationship;

	const isValid = isSearchValid && relationshipFieldsExist;

	return {
		submitForm,
		register,
		control,
		setValue,
		formValues,
		defaultValues,
		isValid,
		...userSingleSearchFuncs,
	};
};

export default useFamilyMembersForm;
