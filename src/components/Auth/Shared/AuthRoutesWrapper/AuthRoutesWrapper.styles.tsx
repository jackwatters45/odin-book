import styled from "styled-components";

export const AuthRouteContainer = styled.div`
	height: 100vh;
	width: 100vw;
	background-color: ${({ theme }) => theme.colors.backgroundSecondary};
	padding: 0 50px;

	display: flex;
	justify-content: center;
`;

export const StyledAuthContainer = styled.div`
	display: flex;
	gap: 8vw;
	justify-content: center;
	margin-top: 5rem;

	@media (max-width: 900px) {
		flex-direction: column;
		justify-content: flex-start;
		gap: 2rem;
	}
`;

export const StyledHeadingColumn = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;

	> p {
		color: ${({ theme }) => theme.colors.textSecondary};
		font-weight: 600;
		font-size: 0.9rem;
	}
`;

export const StyledAuthForm = styled.div`
	min-width: 400px;
	max-width: 400px;
	height: fit-content;
	display: flex;
	flex-direction: column;
	gap: 1rem;
	background-color: ${({ theme }) => theme.colors.backgroundPrimary};
	padding: 1rem;
	border-radius: 0.5rem;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 8px 16px rgba(0, 0, 0, 0.1);
`;
