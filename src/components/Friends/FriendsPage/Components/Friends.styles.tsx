import styled from "styled-components";

export const StyledFriendsContainer = styled.div`
	height: calc(100vh - 56px);
	display: flex;
	position: relative;
`;

export const StyledFriendsContent = styled.div`
	background: ${({ theme }) => theme.colors.backgroundSecondary};
	flex-grow: 1;
	position: relative;
	overflow-y: auto;
`;
