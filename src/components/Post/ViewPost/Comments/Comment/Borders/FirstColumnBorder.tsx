import { IComment } from "@/types/IComment";
import {
	StyledBorderStraightNestedComment,
	StyledResponseCommentBorder,
} from "./Borders.styles";

interface BorderStraightNestedCommentProps {
	nestedCount: number;
	replies: IComment[];
	isDisplayingReplies: boolean;
}

const FirstColumnBorder = ({
	nestedCount,
	replies,
	isDisplayingReplies,
}: BorderStraightNestedCommentProps) => {
	return (
		<>
			{((replies && replies.length > 0) || isDisplayingReplies) && (
				<StyledResponseCommentBorder $isRepliesDisplayed={isDisplayingReplies} />
			)}
			{nestedCount > 1 &&
				Array(nestedCount)
					.fill(0)
					.map((_, i) => (
						<StyledBorderStraightNestedComment key={i} $nestedCount={nestedCount} />
					))}
		</>
	);
};

export default FirstColumnBorder;
