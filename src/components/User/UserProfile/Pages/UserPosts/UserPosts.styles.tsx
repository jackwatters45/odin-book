import styled from "styled-components";

export const UserPostsContainer = styled.div`
	display: flex;
	gap: 1rem;
	justify-content: center;
	background-color: ${({ theme }) => theme.colors.backgroundSecondary};
	width: 100%;

	@media (max-width: 899px) {
		flex-direction: column;
		align-items: center;
	}

	> :first-child {
		padding-bottom: 1rem;
	}

	> div {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		overflow-y: auto;
		height: 100%;

		@media (max-width: 909px) {
			width: 100%;
			max-width: 680px;
		}
	}
`;

export const StyledUserPostsLeftColumn = styled.div`
	width: 42%;

	@media (min-width: 900px) {
		position: -webkit-sticky;
		position: sticky;
	}
`;

export const StyledUserPostsRightColumn = styled.div`
	width: 58%;
`;

export const StyledPostsContainer = styled.div`
	display: flex;
	gap: 1rem;
	flex-direction: column;
	align-items: center;
	position: relative;
	min-height: 100px;
	padding-bottom: 1rem;
`;
