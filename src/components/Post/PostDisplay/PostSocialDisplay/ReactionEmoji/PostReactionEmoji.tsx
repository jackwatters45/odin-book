import { ReactionType, getReactionTypeEmoji } from "@/types/IReaction";
import { StyledReactionEmojiContainer } from "./PostReactionEmoji.styles";

interface ReactionEmojiProps {
	popularReactions: ReactionType[] | undefined;
}

const ReactionEmoji = ({ popularReactions }: ReactionEmojiProps) => (
	<StyledReactionEmojiContainer>
		{popularReactions?.map((reaction) => (
			<span key={reaction} title={reaction}>
				{getReactionTypeEmoji(reaction)}
			</span>
		))}
	</StyledReactionEmojiContainer>
);

export default ReactionEmoji;
