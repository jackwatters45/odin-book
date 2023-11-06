import styled from "styled-components";

export const StyledCommentContent = styled.div`
	background: ${({ theme }) => theme.colors.primaryButton};
	border-radius: 1rem;
	padding: 0.5rem 0.75rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	line-height: 1.2rem;
	font-size: 0.95rem;
	position: relative;
	min-width: 135px;
	width: fit-content;
`;

export const StyledCommentAuthorName = styled.span`
	font-weight: 600;
	font-size: 0.8rem;
	color: ${({ theme }) => theme.colors.primaryText};

	a {
		color: inherit;
	}
`;

export const StyledCommentReactions = styled.div`
	position: absolute;
	bottom: -0.5rem;
	left: calc(100% - 0.75rem);
	border-radius: 1.5rem;
	padding: 0.0625rem 0.125rem;
	font-size: 0.75rem;
	display: flex;
	gap: 0.125rem;
	background-color: ${({ theme }) => theme.colors.backgroundPrimary};

	${({ theme }) => theme.cardShadow};
`;
