import useCurrentUserCached from "@/hooks/useCurrentUserCached";
import { CreatePostFormValues, InitialOpenedState } from "../types/CreatePostTypes";
import useToggledState from "@/hooks/useToggledState";
import { useEffect } from "react";

interface UseBaseCreatePostFormProps {
	formValues: CreatePostFormValues;
	initialOpenedState: InitialOpenedState;
}
const useBaseCreatePostForm = ({
	formValues,
	initialOpenedState,
}: UseBaseCreatePostFormProps) => {
	const currentUser = useCurrentUserCached();

	const addPhotoState = useToggledState();
	useEffect(() => {
		addPhotoState[2](initialOpenedState === "photo");
	}, [initialOpenedState, addPhotoState]);

	const isSubmitDisabled = !(
		formValues.content ||
		formValues.media.length > 0 ||
		formValues.feeling ||
		formValues.checkIn.city ||
		formValues.taggedUsers.length > 0
	);

	return {
		currentUser,
		addPhotoState,
		isSubmitDisabled,
	};
};

export default useBaseCreatePostForm;
