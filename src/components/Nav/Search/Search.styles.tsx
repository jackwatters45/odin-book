import { styled } from "styled-components";

export const SearchInputContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 0.5rem;
	margin-bottom: 1rem;
`;

// 	export const StyledInput = styled.input`
// 	background-color: ${({ theme }) => theme.colors.backgroundSecondary};
// 	border: none;
// 	border-radius: 1.5rem;
// 	padding: 0.75rem 1rem;
// 	font-size: 1rem;
// 	flex-grow: 1;
// `;

export const SearchResult = styled.div`
	padding: 0.5rem 0;
	position: relative;

	> ::before {
		content: "";
		width: 105%;
		height: 100%;
		margin-left: -2.5%;
		position: absolute;
		border-radius: 0.5rem;
		z-index: 1;
	}

	> :hover::before {
		background: grey;
	}

	* {
		z-index: 2;
	}

	button {
		display: flex;
		align-items: center;
		gap: 1rem;
	}
`;

export const StyledResultName = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;
