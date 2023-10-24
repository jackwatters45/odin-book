import { UseFormSetValue } from "react-hook-form";

import usePostTextArea from "./usePostTextArea";
import { PostFormValues } from "../../types/PostFormTypes";
import { StyledPostTextArea, StyledPostTextContainer } from "./PostTextArea.styles";

interface PostTextAreaProps {
	setValue: UseFormSetValue<PostFormValues>;
	initialValue: string;
	isPhotosSelected: boolean;
	toName?: string;
}

const PostTextArea = ({
	initialValue,
	setValue,
	isPhotosSelected,
	toName,
}: PostTextAreaProps) => {
	const { textareaRef, handleInput, userFirstName, handleChange } = usePostTextArea({
		setValue,
		isPhotosSelected,
	});

	return (
		<StyledPostTextContainer>
			<StyledPostTextArea
				id="post-textarea"
				placeholder={
					toName
						? `Write something to ${toName}`
						: `What's on your mind, ${userFirstName}?`
				}
				onInput={handleInput}
				onChange={handleChange}
				defaultValue={initialValue}
				ref={textareaRef}
			/>
		</StyledPostTextContainer>
	);
};

export default PostTextArea;
