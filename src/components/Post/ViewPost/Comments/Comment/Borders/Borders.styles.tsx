import styled from "styled-components";

export const StyledResponseCommentBorder = styled.div<{ $isRepliesDisplayed: boolean }>`
	border-left: solid ${({ theme }) => theme.colors.primaryButton} 2px;
	margin-left: 50%;
	width: 60%;
	flex-grow: 1;

	${({ $isRepliesDisplayed, theme }) =>
		!$isRepliesDisplayed &&
		`margin-bottom: 10px;
	border-bottom: solid  ${theme.colors.primaryButton} 2px;
	border-bottom-left-radius: 8px;`}
`;

export const StyledReplyBorderStraight = styled.div<{
	$nestedCount?: number;
}>`
	position: absolute;
	height: calc(100% + 0.5rem);
	border-left: solid ${({ theme }) => theme.colors.primaryButton} 2px;
	margin-left: -26px;
	flex-grow: 1;
	margin-top: -0.5rem;

	margin-left: ${({ $nestedCount }) =>
		$nestedCount && $nestedCount > 1
			? `calc(-${2.5 * $nestedCount}rem - 81px)`
			: "-26px"};
`;

export const StyledBorderStraightNestedComment = styled(StyledReplyBorderStraight)<{
	$nestedCount: number;
}>`
	margin-left: ${({ $nestedCount }) =>
		$nestedCount && $nestedCount > 1 && `calc(-${2.5 * $nestedCount}rem - 81px)`};
`;

export const StyledBorderStraightNestedCommentInput = styled(StyledReplyBorderStraight)<{
	$nestedCount?: number;
}>`
	margin-left: ${({ $nestedCount }) =>
		$nestedCount && `calc(-${2.5 * $nestedCount}rem - 26px)`};
`;

export const StyledReplyBorderAngled = styled.div`
	position: absolute;
	height: 26px;
	border-left: solid ${({ theme }) => theme.colors.primaryButton} 2px;
	margin-left: -26px;

	margin-top: -0.5rem;

	width: 18px;
	margin-bottom: 10px;
	border-bottom: solid ${({ theme }) => theme.colors.primaryButton} 2px;
	border-bottom-left-radius: 8px;
`;
