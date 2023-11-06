import { IComment } from "@/types/IComment";
import { StyledHoverOption } from "@/components/Post/PostDisplay/PostSocial/Reaction/PostSocialReaction.styles";
import useCommentReaction from "./useCommentReaction";
import {
	ReactionType,
	getReactionTypeEmoji,
	reactionTypeEmojis,
} from "@/types/IReaction";
import {
	StyledCommentHoverOptions,
	StyledCommentLikeButton,
	StyledCommentReactionsContainer,
} from "./CommentReaction.styles";

interface CommentReactionProps {
	comment: IComment;
	postId: string;
}

interface useCommentReaction {
	comment: IComment;
	postId: string;
}

const CommentReaction = ({ comment, postId }: CommentReactionProps) => {
	const {
		isReaction,
		handleClickReact,
		showHoverOptions,
		handleMouseEnter,
		handleMouseLeave,
		handleOptionClick,
	} = useCommentReaction({ comment, postId });

	return (
		<StyledCommentReactionsContainer
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			<StyledCommentHoverOptions style={{ display: showHoverOptions ? "flex" : "none" }}>
				{Object.keys(reactionTypeEmojis).map((emoji) => (
					<StyledHoverOption key={emoji} onClick={() => handleOptionClick(emoji)}>
						{getReactionTypeEmoji(emoji as ReactionType)}
					</StyledHoverOption>
				))}
			</StyledCommentHoverOptions>
			<StyledCommentLikeButton
				onClick={() => handleClickReact("like", true)}
				$isReaction={!!isReaction}
			>
				Like
			</StyledCommentLikeButton>
		</StyledCommentReactionsContainer>
	);
};

export default CommentReaction;
