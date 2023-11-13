import styled from "styled-components";

export const StyledFriendsContainer = styled.div`
	min-height: calc(100vh - 56px);
	display: flex;
`;

export const StyledFriendsContent = styled.div`
	background: ${({ theme }) => theme.colors.backgroundSecondary};
	flex-grow: 1;
	padding: 1.25rem;
`;
