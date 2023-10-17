import styled from "styled-components";

export const StyledUserPropertyDisplayItem = styled.div`
	display: flex;
	align-items: center;
	gap: 0.75rem;
`;

export const StyledUserPropertyDisplayItemTitle = styled.div`
	display: flex;
	flex-direction: column;
	font-size: 0.95rem;
	line-height: 1.34;
	flex-grow: 1;
`;

export const StyledUserPropertyDisplayItemSubtitle = styled.div`
	font-size: 0.75rem;

	color: ${({ theme }) => theme.colors.textSecondary};
`;

export const StyledUserPropertyDisplayItemRightColumn = styled.span`
	display: flex;
	align-items: center;
	gap: 0.75rem;
`;
