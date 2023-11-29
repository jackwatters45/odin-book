import styled from "styled-components";

export const StyledNotificationItemTextContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.125rem;
	margin-top: 0.5rem;
	align-items: flex-start;
`;

export const StyledNotificationItemTextContent = styled.span`
	font-size: 0.95rem;
`;

export const StyledNotificationItemTextTime = styled.span`
	font-size: 0.8rem;
	font-weight: 500;
	color: ${({ theme }) => theme.colors.blueText};
`;
