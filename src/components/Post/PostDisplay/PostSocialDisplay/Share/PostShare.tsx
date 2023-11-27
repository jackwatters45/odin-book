import useViewPostContext from "@/components/Post/ViewPost/context/useViewPostContext";
import formatNumberDisplay from "@/utils/format/formatNumberDisplay";

interface PostShareProps {
	shareCount: number;
	postId: string;
	authorName: string;
}

const PostShare = ({ shareCount, postId, authorName }: PostShareProps) => {
	const { isOpen, openDialog } = useViewPostContext();

	return (
		shareCount > 0 && (
			<button onClick={() => (!isOpen ? openDialog({ postId, authorName }) : null)}>
				<span>{formatNumberDisplay(shareCount)}</span>
				<span>{shareCount > 1 ? <span>shares</span> : <span>share</span>}</span>
			</button>
		)
	);
};

export default PostShare;
