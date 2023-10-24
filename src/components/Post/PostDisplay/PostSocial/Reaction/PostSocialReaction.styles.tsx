import styled from "styled-components";

export const StyledReactionsContainer = styled.div`
	flex-grow: 1;
	display: flex;
`;

export const StyledHoverOptions = styled.span`
	position: absolute;
	bottom: 2.5rem;
	left: 0;
	height: 48px;

	align-items: center;
	padding: 0 0.625rem;
	font-size: 1.5rem;

	border-radius: 1.5rem;
	background-color: ${({ theme }) => theme.colors.backgroundPrimary};
	${({ theme }) => theme.cardShadow}
`;

export const StyledHoverOption = styled.span`
	border-radius: 50%;
	padding: 3px 6px 1px;

	&:hover {
		background-color: ${({ theme }) => theme.colors.hoverOverlay};
	}
`;
