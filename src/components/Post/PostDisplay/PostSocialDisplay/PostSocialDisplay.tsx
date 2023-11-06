import Share from "./Share";
import Comment from "./Comment";
import ReactionText from "./ReactionText";
import ReactionEmoji from "./ReactionEmoji";

import { IPost } from "@/types/IPost";
import usePostSocialDisplay from "./usePostSocialDisplay";

import {
	StyledCommentsSharesContainer,
	StyledPostSocialDisplayContainer,
	StyledReactionsContainer,
} from "./PostSocialDisplay.styles";

interface PostSocialDisplayProps {
	post: IPost;
}

const PostSocialDisplay = ({ post }: PostSocialDisplayProps) => {
	const {
		commentCount,
		shareCount,
		hideCommentShareText,
		hideReactionsText,
		postSocialDisplayContainerRef,
	} = usePostSocialDisplay({ post });

	return (
		<StyledPostSocialDisplayContainer ref={postSocialDisplayContainerRef}>
			<StyledReactionsContainer>
				<ReactionEmoji popularReactions={post.popularReactions} />
				<ReactionText post={post} hideReactionsText={hideReactionsText} />
			</StyledReactionsContainer>
			<StyledCommentsSharesContainer>
				<Comment
					commentCount={commentCount}
					hideCommentShareText={hideCommentShareText}
					postId={post._id}
					authorName={post.author.fullName}
				/>
				<Share
					shareCount={shareCount}
					hideCommentShareText={hideCommentShareText}
					postId={post._id}
					authorName={post.author.fullName}
				/>
			</StyledCommentsSharesContainer>
		</StyledPostSocialDisplayContainer>
	);
};

export default PostSocialDisplay;