import { mdiShare } from "@mdi/js";
import { StyledCommentIcon } from "./PostShare.styles";
import useViewPostContext from "@/components/Post/ViewPost/context/useViewPostContext";

interface PostShareProps {
	shareCount: number;
	hideCommentShareText: boolean;
	postId: string;
}

const PostShare = ({ shareCount, hideCommentShareText, postId }: PostShareProps) => {
	const { isOpen, openDialog } = useViewPostContext();

	return (
		shareCount > 0 && (
			<button onClick={() => (!isOpen ? openDialog({ postId }) : null)}>
				<span>{shareCount}</span>
				<span>
					{hideCommentShareText ? (
						<StyledCommentIcon path={mdiShare} size={0.8} />
					) : shareCount > 1 ? (
						<span>shares</span>
					) : (
						<span>share</span>
					)}
				</span>
			</button>
		)
	);
};

export default PostShare;
