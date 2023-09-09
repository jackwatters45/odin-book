import styled from "styled-components";

export const StyledDetail = styled.div`
	display: flex;
	gap: 0.5rem;
	align-items: center;
`;

export const StyledDetailText = styled.span`
	font-size: 0.95rem;
	color: ${({ theme }) => theme.colors.textPrimary};
`;
