import { IComment } from "@/types/IComment";
import { getReactionTypeEmoji } from "@/types/IReaction";
import { Link } from "react-router-dom";
import {
	StyledCommentAuthorName,
	StyledCommentContent,
	StyledCommentReactions,
	StyledReactionsCount,
} from "./CommentDisplay.styles";
import useDialogsContext from "@/hooks/dialogs/useDialogsContext";

interface CommentDisplayProps {
	comment: IComment;
}

const CommentDisplay = ({
	comment: { author, content, reactions, popularReactions },
}: CommentDisplayProps) => {
	const { closeAllDialogs } = useDialogsContext();

	return (
		<StyledCommentContent>
			<StyledCommentAuthorName>
				<Link to={`/user/${author._id}`} onClick={closeAllDialogs}>
					{author.fullName}
				</Link>
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
