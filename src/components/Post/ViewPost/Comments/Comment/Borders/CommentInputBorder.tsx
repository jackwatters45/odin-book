import {
	StyledBorderStraightNestedCommentInput,
	StyledReplyBorderAngled,
} from "./Borders.styles";

interface CommentInputBorderProps {
	nestedCount: number;
}

const CommentInputBorder = ({ nestedCount }: CommentInputBorderProps) => (
	<>
		<StyledReplyBorderAngled />
		{nestedCount > 0 &&
			Array(nestedCount)
				.fill(0)
				.map((_, i) => (
					<StyledBorderStraightNestedCommentInput
						key={i}
						$nestedCount={nestedCount - i}
					/>
				))}
	</>
);

export default CommentInputBorder;
