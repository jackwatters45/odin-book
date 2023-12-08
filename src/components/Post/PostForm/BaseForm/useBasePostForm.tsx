import useCurrentUserCached from "@/hooks/auth/useCurrentUserCached";
import { PostFormValues, InitialOpenedState } from "../types/PostFormTypes";
import useToggledState from "@/hooks/misc/useToggledState";
import { PostFormInitialValues } from "../context/PostFormContext";

interface UseBasePostFormProps {
	formValues: PostFormValues;
	initialOpenedState: InitialOpenedState;
	initialValues?: PostFormInitialValues | undefined;
}
const useBasePostForm = ({
	formValues,
	initialOpenedState,
	initialValues,
}: UseBasePostFormProps) => {
	const currentUser = useCurrentUserCached();

	const sharedFromData = initialValues?.sharedFrom;
	const mediaData = initialValues?.media;

	const addPhotoState = useToggledState(initialOpenedState === "photo");

	const isSubmitDisabled = !(
		formValues.content ||
		(formValues.media && formValues.media?.length > 0) ||
		(formValues.unsavedMedia && formValues.unsavedMedia?.length > 0) ||
		formValues.feeling ||
		formValues.checkIn?.city ||
		(formValues.taggedUsers && formValues.taggedUsers?.length > 0) ||
		formValues.sharedFrom
	);

	return {
		currentUser,
		sharedFromData,
		mediaData,
		addPhotoState,
		isSubmitDisabled,
	};
};

export default useBasePostForm;
