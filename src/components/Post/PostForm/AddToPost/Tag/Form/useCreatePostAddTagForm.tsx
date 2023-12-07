import { UseFormSetValue } from "react-hook-form";
import { TaggedUserType } from "./types/TagTypes";
import useUserSearch from "@/hooks/misc/useUserSearch";
import { PostFormValues } from "../../../types/PostFormTypes";
import useError from "@/components/Errors/useError";

interface UseCreatePostAddTagFormProps {
	setValue: UseFormSetValue<PostFormValues>;
	taggedUsers: TaggedUserType[] | undefined;
}

const useCreatePostAddTagForm = ({
	setValue,
	taggedUsers,
}: UseCreatePostAddTagFormProps) => {
	const { setError } = useError();

	const { registerSearchInput, searchQuery, searchResults, isLoading } = useUserSearch({
		urlEnding: "friends",
		includeEmpty: true,
		usersToExclude: taggedUsers,
	});

	const handleAddTaggedUser = (user: TaggedUserType) => {
		if (taggedUsers && taggedUsers?.length >= 10) {
			setError("You can only tag up to 10 people.");
			return;
		}

		return taggedUsers
			? setValue("taggedUsers", [...taggedUsers, user])
			: setValue("taggedUsers", [user]);
	};

	const handleRemoveTaggedUser = (user: TaggedUserType) => {
		return taggedUsers
			? setValue(
					"taggedUsers",
					taggedUsers.filter((u) => u._id !== user._id),
			  )
			: setValue("taggedUsers", []);
	};

	return {
		registerSearchInput,
		searchQuery,
		searchResults,
		isLoading,
		handleAddTaggedUser,
		handleRemoveTaggedUser,
	};
};

export default useCreatePostAddTagForm;
