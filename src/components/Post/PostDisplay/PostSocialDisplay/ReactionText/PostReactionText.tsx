import { IPost } from "@/types/IPost";
import { Fragment } from "react";
import getReactionTitleSegments from "../utils/getReactionTitleSegments";
import { StyledReactionsTextContainer } from "./PostReactionText.styles";
import formatNumberDisplay from "@/utils/format/formatNumberDisplay";
import usePostReactionText from "./usePostReactionText";

interface ReactionTextProps {
	post: IPost;
	showReactionText: boolean;
}

const PostReactionText = ({ post, showReactionText }: ReactionTextProps) => {
	const { currentUserId, renderTitleSegments } = usePostReactionText();

	return showReactionText ? (
		<StyledReactionsTextContainer>
			{getReactionTitleSegments(post, currentUserId).map((segment, index) => (
				<Fragment key={index}>{renderTitleSegments(segment)}</Fragment>
			))}
		</StyledReactionsTextContainer>
	) : (
		<StyledReactionsTextContainer>
			<span>{formatNumberDisplay(post?.reactions?.length)}</span>
		</StyledReactionsTextContainer>
	);
};

export default PostReactionText;
