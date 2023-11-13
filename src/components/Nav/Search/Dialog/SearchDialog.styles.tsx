import { styled } from "styled-components";

export const SearchInputContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 0.5rem;
	margin-bottom: 0.75rem;

	input {
		color: ${({ theme }) => theme.colors.textPrimary};
	}
`;

export const SearchResult = styled.div`
	padding: 0.5rem 0;
	position: relative;
	color: ${({ theme }) => theme.colors.blueText};
	font-size: 0.95rem;

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
		background: ${({ theme }) => theme.colors.hoverOverlay};
	}

	* {
		z-index: 2;
	}

	> a {
		display: flex;
		align-items: center;
		gap: 1rem;
	}
`;

export const StyledResultName = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	color: ${({ theme }) => theme.colors.textPrimary};
`;

export const StyledSearchForText = styled.p`
	color: ${({ theme }) => theme.colors.blueText};
`;

export const StyledSearchResultSubtext = styled.p`
	margin-top: 0.25rem;
	font-size: 0.8rem;
	color: ${({ theme }) => theme.colors.textSecondary};
`;
