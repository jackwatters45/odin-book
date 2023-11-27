import useViewPostContext from "@/components/Post/ViewPost/context/useViewPostContext";
import formatNumberDisplay from "@/utils/format/formatNumberDisplay";

interface PostCommentProps {
	commentCount: number;
	postId: string;
	authorName: string;
}

const PostComment = ({ commentCount, postId, authorName }: PostCommentProps) => {
	const { isOpen, openDialog } = useViewPostContext();

	return (
		commentCount > 0 && (
			<button onClick={() => (!isOpen ? openDialog({ postId, authorName }) : null)}>
				<span>{formatNumberDisplay(commentCount)}</span>
				{commentCount > 1 ? <span>comments</span> : <span>comment</span>}
			</button>
		)
	);
};

export default PostComment;
