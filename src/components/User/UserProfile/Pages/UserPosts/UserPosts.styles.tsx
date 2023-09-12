import styled from "styled-components";

export const UserPostsContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;

	justify-content: center;
	background-color: ${({ theme }) => theme.colors.backgroundSecondary};
	padding: 1rem 2rem;

	@media (max-width: 899px) {
		flex-direction: column;
		padding: 1rem;
		gap: 1rem;
	}
`;
