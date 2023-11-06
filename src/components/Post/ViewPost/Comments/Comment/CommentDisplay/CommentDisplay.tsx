import { IComment } from "@/types/IComment";
import { getReactionTypeEmoji } from "@/types/IReaction";
import { Link } from "react-router-dom";
import {
	StyledCommentAuthorName,
	StyledCommentContent,
	StyledCommentReactions,
} from "./CommentDisplay.styles";
import { useEffect } from "react";

interface CommentDisplayProps {
	comment: IComment;
}

const CommentDisplay = ({ comment }: CommentDisplayProps) => {
	useEffect(() => {
		if (comment._id === "654570ddc2bb1ca01e7ffcd1") console.log(comment.content);
	}, [comment]);
	return (
		<StyledCommentContent>
			<StyledCommentAuthorName>
				<Link to={`/user/${comment.author._id}`}>{comment.author.fullName}</Link>
			</StyledCommentAuthorName>
			<span>{comment.content}</span>
			{comment.popularReactions && comment.popularReactions.length > 0 && (
				<StyledCommentReactions>
					{comment.popularReactions.map((reaction) => (
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
