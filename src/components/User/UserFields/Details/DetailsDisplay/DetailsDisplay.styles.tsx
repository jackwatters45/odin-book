import styled from "styled-components";

export const StyledDetailsDisplayContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;

export const StyledLink = styled.a`
	color: ${({ theme }) => theme.colors.blueText};

	&:hover {
		text-decoration: underline;
	}
`;
