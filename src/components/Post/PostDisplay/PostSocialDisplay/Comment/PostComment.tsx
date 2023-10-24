import { mdiComment } from "@mdi/js";
import Icon from "@mdi/react";

interface PostCommentProps {
	commentCount: number;
	hideCommentShareText: boolean;
}

const PostComment = ({ commentCount, hideCommentShareText }: PostCommentProps) => {
	return (
		commentCount > 0 && (
			// TODO open post view and focus on comment button
			<button onClick={() => console.log("TODO")}>
				<span>{commentCount}</span>
				{hideCommentShareText ? (
					<Icon path={mdiComment} size={0.7} />
				) : commentCount > 1 ? (
					<span>comments</span>
				) : (
					<span>comment</span>
				)}
			</button>
		)
	);
};

export default PostComment;
