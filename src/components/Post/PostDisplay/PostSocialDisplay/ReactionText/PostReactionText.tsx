import useCurrentUserCached from "@/hooks/useCurrentUserCached";
import { IPost } from "@/types/IPost";
import renderTitleSegment from "@/utils/render/titleSegment/titleSegments";
import { Fragment } from "react";
import getReactionTitleSegments from "../utils/getReactionTitleSegments";
import { StyledReactionsTextContainer } from "./PostReactionText.styles";
import formatNumberDisplay from "@/utils/format/formatNumberDisplay";

interface ReactionTextProps {
	post: IPost;
	showReactionText: boolean;
}

const PostReactionText = ({ post, showReactionText }: ReactionTextProps) => {
	const currentUserId = useCurrentUserCached()?._id;

	return showReactionText ? (
		<StyledReactionsTextContainer>
			{getReactionTitleSegments(post, currentUserId).map((segment, index) => (
				<Fragment key={index}>{renderTitleSegment(segment)}</Fragment>
			))}
		</StyledReactionsTextContainer>
	) : (
		<StyledReactionsTextContainer>
			<span>{formatNumberDisplay(post?.reactions?.length)}</span>
		</StyledReactionsTextContainer>
	);
};

export default PostReactionText;
