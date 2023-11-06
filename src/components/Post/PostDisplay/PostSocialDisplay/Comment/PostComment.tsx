import { mdiComment } from "@mdi/js";
import Icon from "@mdi/react";

import useViewPostContext from "@/components/Post/ViewPost/context/useViewPostContext";

interface PostCommentProps {
	commentCount: number;
	hideCommentShareText: boolean;
	postId: string;
	authorName: string;
}

const PostComment = ({
	commentCount,
	hideCommentShareText,
	postId,
	authorName,
}: PostCommentProps) => {
	const { isOpen, openDialog } = useViewPostContext();

	return (
		commentCount > 0 && (
			<button onClick={() => (!isOpen ? openDialog({ postId, authorName }) : null)}>
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
