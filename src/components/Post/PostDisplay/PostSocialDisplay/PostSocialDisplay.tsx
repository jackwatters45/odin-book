import { HTMLAttributes } from "react";

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

interface PostSocialDisplayProps extends HTMLAttributes<HTMLDivElement> {
	post: IPost;
}

const PostSocialDisplay = ({ post, ...props }: PostSocialDisplayProps) => {
	const {
		commentCount,
		shareCount,
		containerRef,
		reactionsRef,
		commentsSharesRef,
		showReactionText,
	} = usePostSocialDisplay({ post });

	return (
		<StyledPostSocialDisplayContainer ref={containerRef} {...props}>
			<StyledReactionsContainer ref={reactionsRef}>
				<ReactionEmoji popularReactions={post.popularReactions} />
				<ReactionText post={post} showReactionText={showReactionText} />
			</StyledReactionsContainer>
			<StyledCommentsSharesContainer ref={commentsSharesRef}>
				<Comment
					commentCount={commentCount}
					postId={post._id}
					authorName={post.author.fullName}
				/>
				<Share
					shareCount={shareCount}
					postId={post._id}
					authorName={post.author.fullName}
				/>
			</StyledCommentsSharesContainer>
		</StyledPostSocialDisplayContainer>
	);
};

export default PostSocialDisplay;
