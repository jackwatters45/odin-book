import { UseFormRegister } from "react-hook-form";
import { StyledPostTextArea, StyledPostTextContainer } from "./CreatePostTextArea.styles";
import useCreatePostTextArea from "./useCreatePostTextArea";
import { FormValues } from "../../types/CreatePostTypes";

interface CreatePostTextAreaProps {
	register: ReturnType<UseFormRegister<FormValues>>;
	isPhotosSelected: boolean;
}

const CreatePostTextArea = ({ register, isPhotosSelected }: CreatePostTextAreaProps) => {
	const { textareaRef, handleInput, userFirstName } = useCreatePostTextArea({
		isPhotosSelected,
	});

	return (
		<StyledPostTextContainer>
			<StyledPostTextArea
				id="post-textarea"
				placeholder={`What's on your mind, ${userFirstName}?`}
				onInput={handleInput}
				{...register}
				ref={(e) => {
					register.ref(e);
					textareaRef.current = e;
				}}
			/>
		</StyledPostTextContainer>
	);
};

export default CreatePostTextArea;
