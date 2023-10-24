import styled from "styled-components";

export const StyledPostTitle = styled.span`
	font-size: 0.9rem;
	line-height: 1rem;

	a {
		color: ${({ theme }) => theme.colors.textPrimary};
	}

	a:hover {
		text-decoration: underline;
	}
`;
