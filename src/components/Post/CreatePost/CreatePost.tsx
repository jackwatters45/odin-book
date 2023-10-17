import useCreatePost from "./useCreatePost";
import { FormValues, InitialOpenedState } from "./types/CreatePostTypes";
import { StyledDialogCreatePost } from "./CreatePost.styles";
import TagForm from "./AddToPost/Tag/Form";
import FeelingForm from "./AddToPost/Feeling/Form";
import CheckinForm from "./AddToPost/CheckIn/Form";
import BaseCreatePostForm from "./BaseForm";

interface CreatePostProps {
	initialValues: FormValues | undefined;
	initialOpenedState: InitialOpenedState;
}

// TODO dialog actually work

// TODO real previews
// TODO edit post
const CreatePost = ({ initialValues, initialOpenedState }: CreatePostProps) => {
	const {
		ref,
		closeDialog,
		setValue,
		formValues,
		isTaggingUsers,
		toggleIsTaggingUsers,
		isAddingFeeling,
		toggleIsAddingFeeling,
		isCheckingIn,
		toggleIsCheckingIn,
		photoPreviews,
		setPhotoPreviews,
		isPreviousDefault,
		...formMethods
	} = useCreatePost({ initialValues, initialOpenedState });

	return (
		<StyledDialogCreatePost ref={ref} open>
			{isTaggingUsers ? (
				<TagForm
					closeForm={toggleIsTaggingUsers}
					setValue={setValue}
					taggedUsers={formValues?.taggedUsers}
				/>
			) : isAddingFeeling ? (
				<FeelingForm
					closeForm={toggleIsAddingFeeling}
					setValue={setValue}
					currentValue={formValues?.feeling}
				/>
			) : isCheckingIn ? (
				<CheckinForm
					closeForm={toggleIsCheckingIn}
					setValue={setValue}
					currentValue={formValues?.checkIn}
				/>
			) : (
				<BaseCreatePostForm
					isPreviousDefault={isPreviousDefault}
					initialOpenedState={initialOpenedState}
					closeDialog={closeDialog}
					formValues={formValues}
					setValue={setValue}
					toggleIsTaggingUsers={toggleIsTaggingUsers}
					toggleIsAddingFeeling={toggleIsAddingFeeling}
					toggleIsCheckingIn={toggleIsCheckingIn}
					photoPreviews={photoPreviews}
					setPhotoPreviews={setPhotoPreviews}
					{...formMethods}
				/>
			)}
		</StyledDialogCreatePost>
	);
};

export default CreatePost;
