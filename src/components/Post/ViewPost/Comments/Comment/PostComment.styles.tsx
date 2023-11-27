import StandardButton from "@/components/Shared/StandardButton";
import styled from "styled-components";

export const StyledCommentContainer = styled.div<{ $nestedCount: number }>`
	position: relative;
	margin-top: 0.5rem;
	display: flex;
	gap: 0.5rem;
	padding-left: ${({ $nestedCount }) => `${2.5 * $nestedCount}rem`};
`;

export const StyledCommentContentSocialContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	gap: 0.125rem;
`;

export const StyledViewRepliesButton = styled(StandardButton)`
	font-size: 0.95rem;
	font-weight: 500;
	height: fit-content;
	padding: 0.25rem 0.5rem;
	gap: 0.25rem;
	color: ${({ theme }) => theme.colors.textSecondary};
	margin-left: 0.25rem;
	width: fit-content;
`;

export const StyledContentMoreOptionsContainer = styled.div`
	display: flex;
	gap: 0.5rem;
	justify-content: space-between;
`;

export const StyledFirstColumn = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const StyledReplyInputContainer = styled.div<{ $nestedCount: number }>`
	position: relative;

	padding: ${({ $nestedCount }) => ($nestedCount ? ".5rem 1rem .25rem" : ".75rem 1rem;")};

	${({ $nestedCount }) =>
		`padding-left: ${$nestedCount ? `${2.5 * $nestedCount}rem` : "1rem"}`};
`;
