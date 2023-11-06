import { StyledReplyBorderAngled, StyledReplyBorderStraight } from "./Borders.styles";

interface ReplyBorderProps {
	isReply: boolean;
}

const ReplyBorder = ({ isReply }: ReplyBorderProps) =>
	isReply && (
		<>
			<StyledReplyBorderAngled />
			<StyledReplyBorderStraight />
		</>
	);

export default ReplyBorder;
