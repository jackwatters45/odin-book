import { IPost, getReactionTypeEmoji } from "@/types/IPost";
import { StyledReactionEmojiContainer } from "./PostReactionEmoji.styles";

interface ReactionEmojiProps {
	post: IPost;
}

const PostReactionEmoji = ({ post }: ReactionEmojiProps) => (
	<StyledReactionEmojiContainer>
		{post.popularReactions?.map((reaction) => (
			<span key={reaction} title={reaction}>
				{getReactionTypeEmoji(reaction)}
			</span>
		))}
	</StyledReactionEmojiContainer>
);

export default PostReactionEmoji;
