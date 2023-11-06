import styled from "styled-components";

export const StyledSocialOptionsContainer = styled.div`
	display: flex;
	gap: 0.5rem;
	margin-left: 0.75rem;

	font-size: 0.8rem;
	color: ${({ theme }) => theme.colors.textSecondary};

	button {
		font-weight: 600;
	}
`;
