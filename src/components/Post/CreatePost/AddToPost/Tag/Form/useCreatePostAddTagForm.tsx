import { UseFormSetValue } from "react-hook-form";
import { TaggedUserType } from "./types/TagTypes";
import useUserSearch from "@/hooks/useUserSearch";
import { FormValues } from "../../../types/CreatePostTypes";
import useError from "@/components/Errors/useError";

interface UseCreatePostAddTagFormProps {
	setValue: UseFormSetValue<FormValues>;
	taggedUsers: TaggedUserType[];
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
		if (taggedUsers.length >= 10) {
			setError("You can only tag up to 10 people.");
			return;
		}
		setValue("taggedUsers", [...taggedUsers, user]);
	};

	const handleRemoveTaggedUser = (user: TaggedUserType) => {
		setValue(
			"taggedUsers",
			taggedUsers.filter((u) => u._id !== user._id),
		);
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
