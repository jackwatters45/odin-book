import Icon from "@mdi/react";
import { mdiThumbUp, mdiThumbUpOutline } from "@mdi/js";

import useSocialReaction from "./usePostSocialReaction";
import { StyledSocialOptionButton } from "../PostSocial.styles";
import { IPost } from "@/types/IPost";
import {
	StyledHoverOption,
	StyledHoverOptions,
	StyledReactionsContainer,
} from "./PostSocialReaction.styles";
import {
	ReactionType,
	getReactionTypeEmoji,
	reactionTypeEmojis,
} from "@/types/IReaction";

interface PostSocialReactionProps {
	post: IPost;
}

const PostSocialReaction = ({ post }: PostSocialReactionProps) => {
	const {
		isReaction,
		handleClickReact,
		showHoverOptions,
		handleMouseEnter,
		handleMouseLeave,
		handleOptionClick,
	} = useSocialReaction(post);

	return (
		<StyledReactionsContainer
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			<StyledHoverOptions style={{ display: showHoverOptions ? "flex" : "none" }}>
				{Object.keys(reactionTypeEmojis).map((emoji) => (
					<StyledHoverOption key={emoji} onClick={() => handleOptionClick(emoji)}>
						{getReactionTypeEmoji(emoji as ReactionType)}
					</StyledHoverOption>
				))}
			</StyledHoverOptions>
			<StyledSocialOptionButton
				onClick={() => handleClickReact("like", true)}
				$isReaction={isReaction}
			>
				<Icon path={isReaction ? mdiThumbUp : mdiThumbUpOutline} size={0.9} />
				<span>Like</span>
			</StyledSocialOptionButton>
		</StyledReactionsContainer>
	);
};

export default PostSocialReaction;
