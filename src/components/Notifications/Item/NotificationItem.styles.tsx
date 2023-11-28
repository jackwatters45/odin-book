import styled from "styled-components";

export const StyledNotificationItemContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0.5rem 0.5rem 0.5rem;
	gap: 0.5rem;

	&:hover {
		background-color: ${({ theme }) => theme.colors.hoverOverlay};
		border-radius: 0.375rem;
	}
`;

export const StyledNotificationItemContent = styled.div`
	display: flex;
	align-items: center;
	gap: 0.25rem;
`;

export const MarkAsReadDot = styled.button`
	width: 0.75rem;
	height: 0.75rem;
	border-radius: 50%;
	background-color: ${({ theme }) => theme.colors.blueButton};
`;
