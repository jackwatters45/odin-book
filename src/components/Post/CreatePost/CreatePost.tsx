import useCreatePost from "./useCreatePost";
import { StyledDialogCreatePost } from "./CreatePost.styles";
import TagForm from "./AddToPost/Tag/Form";
import FeelingForm from "./AddToPost/Feeling/Form";
import CheckinForm from "./AddToPost/CheckIn/Form";
import BaseCreatePostForm from "./BaseForm";

const CreatePost = () => {
	const {
		ref,
		closeDialog,
		initialOpenedState,
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
	} = useCreatePost();

	return (
		<StyledDialogCreatePost ref={ref}>
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
