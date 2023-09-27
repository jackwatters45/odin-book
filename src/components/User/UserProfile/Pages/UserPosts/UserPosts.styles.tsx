import styled from "styled-components";

export const UserPostsContainer = styled.div`
	display: flex;
	padding: 1rem;
	gap: 1rem;
	justify-content: center;
	background-color: ${({ theme }) => theme.colors.backgroundSecondary};

	@media (max-width: 899px) {
		flex-direction: column;
		align-items: center;
	}

	> div {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		overflow-y: auto;
		height: 100%;

		@media (max-width: 899px) {
			width: 100%;
		}
	}
`;

export const StyledUserPostsLeftColumn = styled.div`
	width: 42%;

	@media (min-width: 900px) {
		position: -webkit-sticky; /* for Safari */
		position: sticky;
	}
`;

export const StyledUserPostsRightColumn = styled.div`
	width: 58%;
`;
