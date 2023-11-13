import { IComment } from "@/types/IComment";
import { getReactionTypeEmoji } from "@/types/IReaction";
import { Link } from "react-router-dom";
import {
	StyledCommentAuthorName,
	StyledCommentContent,
	StyledCommentReactions,
	StyledReactionsCount,
} from "./CommentDisplay.styles";

interface CommentDisplayProps {
	comment: IComment;
}

const CommentDisplay = ({
	comment: { author, content, reactions, popularReactions },
}: CommentDisplayProps) => {
	return (
		<StyledCommentContent>
			<StyledCommentAuthorName>
				<Link to={`/user/${author._id}`}>{author.fullName}</Link>
			</StyledCommentAuthorName>
			<span>{content}</span>
			{popularReactions && popularReactions.length > 0 && (
				<StyledCommentReactions>
					<StyledReactionsCount>{reactions.length}</StyledReactionsCount>
					{popularReactions.map((reaction) => (
						<span key={reaction} title={reaction}>
							{getReactionTypeEmoji(reaction)}
						</span>
					))}
				</StyledCommentReactions>
			)}
		</StyledCommentContent>
	);
};

export default CommentDisplay;
