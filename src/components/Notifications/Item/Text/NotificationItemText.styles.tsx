import styled from "styled-components";

export const StyledNotificationItemTextContainer = styled.div`
	align-self: flex-start;
	display: flex;
	flex-direction: column;
	gap: 0.125rem;
	margin-top: 0.25rem;
`;

export const StyledNotificationItemTextContent = styled.span`
	font-size: 0.95rem;
`;

export const StyledNotificationItemTextTime = styled.span`
	font-size: 0.8rem;
	font-weight: 500;
	color: ${({ theme }) => theme.colors.blueText};
`;
