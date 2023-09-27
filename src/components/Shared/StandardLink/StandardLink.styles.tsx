import styled from "styled-components";

export const StyledButton = styled.button`
	padding: 0.75rem 0.5rem 0.5rem;
	border-radius: 0.25rem;
	margin-right: -0.5rem;

	a {
		font-size: 1rem;
		color: ${({ theme }) => theme.colors.blueText};
	}

	&:hover {
		background: ${({ theme }) => theme.colors.hoverOverlay};
	}
`;
