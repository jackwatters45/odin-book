import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

const StyledNotificationItemContainer = css`
	display: flex;
	justify-content: space-between;
	padding: 0.5rem;
	gap: 2.5rem;

	&:hover {
		background-color: ${({ theme }) => theme.colors.hoverOverlay};
		border-radius: 0.375rem;
	}
`;

export const StyledNotificationItemContainerLink = styled(Link)`
	${StyledNotificationItemContainer}
`;

export const StyledNotificationItemContainerButton = styled.button`
	${StyledNotificationItemContainer}
`;
