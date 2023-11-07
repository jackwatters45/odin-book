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

export const StyledLoadingContainer = styled.div`
	margin-top: 1rem;
	position: relative;
	min-height: 80px;
	width: 100%;
	background-color: ${({ theme }) => theme.colors.backgroundPrimary};
	border-radius: 0.375rem;
	${({ theme }) => theme.cardShadow};
`;

export const StyledNoMorePosts = styled.h2`
	margin-top: 1rem;
	font-size: 1.5rem;
	font-weight: 600;
	color: ${({ theme }) => theme.colors.textSecondary};
`;
