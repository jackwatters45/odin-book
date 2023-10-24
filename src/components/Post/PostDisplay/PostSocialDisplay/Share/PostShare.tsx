import { mdiShare } from "@mdi/js";
import { StyledCommentIcon } from "./PostShare.styles";

interface PostShareProps {
	shareCount: number;
	hideCommentShareText: boolean;
}

const PostShare = ({ shareCount, hideCommentShareText }: PostShareProps) =>
	shareCount > 0 && (
		// TODO maybe just omit above and this?
		<button onClick={() => console.log("TODO")}>
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
	);

export default PostShare;
