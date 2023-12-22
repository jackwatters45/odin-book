import CommentReaction from "./CommentReaction";
import { IComment } from "@/types/IComment";
import formatTimeSince from "@/utils/dateHelpers/formatTimeSince";
import { StyledSocialOptionsContainer } from "./SocialOptions.styles";

interface SocialOptionsProps {
	comment: IComment;
	postId: string;
	handleClickReply: () => void;
}

const SocialOptions = ({ comment, postId, handleClickReply }: SocialOptionsProps) => {
	return (
		<StyledSocialOptionsContainer>
			{!comment.isDeleted && (
				<>
					<CommentReaction comment={comment} postId={postId} />
					<button onClick={handleClickReply}>Reply</button>
				</>
			)}
			<span title={comment.createdAt}>{formatTimeSince(comment.createdAt)}</span>
		</StyledSocialOptionsContainer>
	);
};

export default SocialOptions;
