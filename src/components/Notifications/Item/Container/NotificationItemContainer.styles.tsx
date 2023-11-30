import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const StyledNotificationItemContainer = styled.div`
	position: relative;

	&:hover {
		background-color: ${({ theme }) => theme.colors.hoverOverlay};
		border-radius: 0.375rem;
	}
`;

const StyledNotificationItemContainerStyles = css`
	display: flex;
	justify-content: space-between;
	padding: 0.5rem;
	gap: 2.5rem;
	width: 100%;
`;

export const StyledNotificationItemContainerLink = styled(Link)`
	${StyledNotificationItemContainerStyles}
`;

export const StyledNotificationItemContainerButton = styled.button`
	${StyledNotificationItemContainerStyles}
`;
