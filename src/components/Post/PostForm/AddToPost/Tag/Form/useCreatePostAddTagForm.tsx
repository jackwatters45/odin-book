import { UseFormSetValue } from "react-hook-form";
import { TaggedUserType } from "./types/TagTypes";
import useUserSearch from "@/hooks/misc/useUserSearch";
import { PostFormValues } from "../../../types/PostFormTypes";
import useError from "@/components/Errors/useError";
import { useState } from "react";

interface UseCreatePostAddTagFormProps {
	setValue: UseFormSetValue<PostFormValues>;
	taggedUsers: TaggedUserType[] | undefined;
}

const useCreatePostAddTagForm = ({
	setValue,
	taggedUsers,
}: UseCreatePostAddTagFormProps) => {
	const { setError } = useError();

	// start showing less results when approaching max tagged users
	const MAX_TAGGED_USERS = 20;
	const [resultDisplayCount, setResultDisplayCount] = useState(10);
	const updateResultDisplayCount = () => {
		if (taggedUsers && taggedUsers?.length >= 10) {
			setResultDisplayCount(MAX_TAGGED_USERS - taggedUsers.length);
		}
	};

	const { registerSearchInput, searchQuery, searchResults, isLoading, isSuccess } =
		useUserSearch({
			urlEnding: "friends",
			includeEmpty: true,
			usersToExclude: taggedUsers,
		});

	const handleAddTaggedUser = (user: TaggedUserType) => {
		if (taggedUsers && taggedUsers?.length >= MAX_TAGGED_USERS) {
			setError("You can only tag up to 20 people.");
			return;
		}

		updateResultDisplayCount();

		return taggedUsers
			? setValue("taggedUsers", [...taggedUsers, user])
			: setValue("taggedUsers", [user]);
	};

	const handleRemoveTaggedUser = (user: TaggedUserType) => {
		updateResultDisplayCount();

		return taggedUsers
			? setValue(
					"taggedUsers",
					taggedUsers.filter((u) => u._id !== user._id),
			  )
			: setValue("taggedUsers", []);
	};

	return {
		resultDisplayCount,
		registerSearchInput,
		searchQuery,
		searchResults,
		isLoading,
		isSuccess,
		handleAddTaggedUser,
		handleRemoveTaggedUser,
	};
};

export default useCreatePostAddTagForm;
