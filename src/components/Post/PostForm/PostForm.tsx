import usePostForm from "./usePostForm";
import { StyledDialogPostForm } from "./PostForm.styles";
import TagForm from "./AddToPost/Tag/Form";
import FeelingForm from "./AddToPost/Feeling/Form";
import CheckinForm from "./AddToPost/CheckIn/Form";
import BasePostFormForm from "./BaseForm";

const PostForm = () => {
	const {
		ref,
		setValue,
		toggleIsTaggingUsers,
		toggleIsAddingFeeling,
		isTaggingUsers,
		isAddingFeeling,
		isCheckingIn,
		formValues,
		toggleIsCheckingIn,
		...rest
	} = usePostForm();

	return (
		<StyledDialogPostForm ref={ref}>
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
				<BasePostFormForm
					formValues={formValues}
					setValue={setValue}
					toggleIsTaggingUsers={toggleIsTaggingUsers}
					toggleIsAddingFeeling={toggleIsAddingFeeling}
					toggleIsCheckingIn={toggleIsCheckingIn}
					{...rest}
				/>
			)}
		</StyledDialogPostForm>
	);
};

export default PostForm;
