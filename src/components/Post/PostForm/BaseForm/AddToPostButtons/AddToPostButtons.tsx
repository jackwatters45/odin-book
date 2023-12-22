import {
	StyledAddToPost,
	StyledAddToPostIcons,
	StyledAddToPostText,
} from "./AddToPostButtons.styles";

import PhotoButton from "../../AddToPost/Photo/Button";
import TagButton from "../../AddToPost/Tag/Button";
import FeelingButton from "../../AddToPost/Feeling/Button";
import CheckInButton from "../../AddToPost/CheckIn/Button";
import { PostFormValues } from "../../types/PostFormTypes";

interface AddToPostButtonsProps {
	formValues: PostFormValues;
	isAddingPhoto: boolean;
	toggleIsAddingPhoto: () => void;
	toggleIsTaggingUsers: () => void;
	toggleIsAddingFeeling: () => void;
	toggleIsCheckingIn: () => void;
}

const AddToPostButtons = ({
	formValues,
	isAddingPhoto,
	toggleIsAddingPhoto,
	toggleIsTaggingUsers,
	toggleIsAddingFeeling,
	toggleIsCheckingIn,
}: AddToPostButtonsProps) => {
	return (
		<StyledAddToPost>
			<StyledAddToPostText>Add to your post</StyledAddToPostText>
			<StyledAddToPostIcons>
				<PhotoButton
					toggleIsAddingPhoto={toggleIsAddingPhoto}
					isAddingPhoto={isAddingPhoto}
					isCurrentValue={
						!!formValues?.media?.length || !!formValues?.unsavedMedia?.length
					}
				/>
				<TagButton
					openForm={toggleIsTaggingUsers}
					currentValue={formValues?.taggedUsers}
				/>
				<FeelingButton
					openForm={toggleIsAddingFeeling}
					currentValue={formValues?.feeling}
				/>
				<CheckInButton openForm={toggleIsCheckingIn} currentValue={formValues?.checkIn} />
			</StyledAddToPostIcons>
		</StyledAddToPost>
	);
};

export default AddToPostButtons;
