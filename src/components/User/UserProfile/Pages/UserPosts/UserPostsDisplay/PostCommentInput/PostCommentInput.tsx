import { ImageCircle } from "@/components/Nav/Nav.styles";
import { StyledCommentContainer } from "./PostCommentInput.styles";
import { StyledTextInput } from "@/styles/SharedStyles";
import usePostCommentInput from "./usePostCommentInput";

const PostCommentInput = () => {
	const { userAvatarUrl, userName } = usePostCommentInput();

	return (
		<StyledCommentContainer>
			<ImageCircle src={userAvatarUrl} alt={userName} />
			<StyledTextInput>
				<input type="text" placeholder="Write a comment..." />
			</StyledTextInput>
		</StyledCommentContainer>
	);
};

export default PostCommentInput;
