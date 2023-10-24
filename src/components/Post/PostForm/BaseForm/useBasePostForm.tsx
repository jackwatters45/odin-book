import useCurrentUserCached from "@/hooks/useCurrentUserCached";
import { PostFormValues, InitialOpenedState } from "../types/PostFormTypes";
import useToggledState from "@/hooks/useToggledState";

interface UseBasePostFormProps {
	formValues: PostFormValues;
	initialOpenedState: InitialOpenedState;
}
const useBasePostForm = ({ formValues, initialOpenedState }: UseBasePostFormProps) => {
	const currentUser = useCurrentUserCached();

	const addPhotoState = useToggledState(initialOpenedState === "photo");

	const isSubmitDisabled = !(
		formValues.content ||
		(formValues.media && formValues.media?.length > 0) ||
		formValues.feeling ||
		formValues.checkIn?.city ||
		(formValues.taggedUsers && formValues.taggedUsers?.length > 0) ||
		formValues.sharedFrom
	);

	return {
		currentUser,
		addPhotoState,
		isSubmitDisabled,
	};
};

export default useBasePostForm;
