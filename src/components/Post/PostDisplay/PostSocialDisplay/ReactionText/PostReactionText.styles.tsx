import styled from "styled-components";

export const StyledReactionsTextContainer = styled.div`
	a,
	span {
		font-weight: 400;
		color: ${({ theme }) => theme.colors.textSecondary};
	}
`;
