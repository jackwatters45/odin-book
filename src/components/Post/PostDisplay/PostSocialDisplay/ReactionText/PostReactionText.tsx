import useCurrentUserCached from "@/hooks/useCurrentUserCached";
import { IPost } from "@/types/IPost";
import renderTitleSegment from "@/utils/render/titleSegment/titleSegments";
import { Fragment } from "react";
import getReactionTitleSegments from "../utils/getReactionTitleSegments";
import { StyledReactionsTextContainer } from "./PostReactionText.styles";

interface ReactionTextProps {
	post: IPost;
	hideReactionsText: boolean;
}

const PostReactionText = ({ post, hideReactionsText }: ReactionTextProps) => {
	const currentUserId = useCurrentUserCached()?._id;

	return (
		!hideReactionsText && (
			<StyledReactionsTextContainer>
				{getReactionTitleSegments(post, currentUserId).map((segment, index) => (
					<Fragment key={index}>{renderTitleSegment(segment)}</Fragment>
				))}
			</StyledReactionsTextContainer>
		)
	);
};

export default PostReactionText;
