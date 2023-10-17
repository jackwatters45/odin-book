import useCurrentUserCached from "@/hooks/useCurrentUserCached";
import { FormValues, InitialOpenedState } from "../types/CreatePostTypes";
import useToggledState from "@/hooks/useToggledState";

interface UseBaseCreatePostFormProps {
	formValues: FormValues;
	initialOpenedState: InitialOpenedState;
}
const useBaseCreatePostForm = ({
	formValues,
	initialOpenedState,
}: UseBaseCreatePostFormProps) => {
	const currentUser = useCurrentUserCached();

	const addPhotoState = useToggledState({ initialState: initialOpenedState === "photo" });

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
