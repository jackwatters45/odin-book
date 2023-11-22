import styled from "styled-components";

export const StyledFriendCardsContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(175px, 1fr));
	gap: 0.75rem;
	padding: 0 1rem;

	@media (min-width: 1635px) {
		grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
	}

	@media (min-width: 1835px) {
		grid-template-columns: repeat(auto-fill, minmax(225px, 1fr));
	}

	@media (min-width: 2035px) {
		grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
	}
`;
