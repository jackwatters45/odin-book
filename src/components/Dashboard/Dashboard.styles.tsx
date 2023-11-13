import styled from "styled-components";

export const StyledDashboardContainer = styled.div`
	background-color: ${({ theme }) => theme.colors.backgroundSecondary};
	min-height: calc(100vh - 56px);
	display: flex;
`;

export const StyledDashboardContentContainer = styled.div`
	max-width: 680px;
	width: 100%;
	margin: 0 auto;
	padding: 1rem;

	display: flex;
	flex-direction: column;
	align-items: center;

	background-color: ${({ theme }) => theme.colors.backgroundSecondary};
`;

export const StyledPostsContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	gap: 1rem;
`;
