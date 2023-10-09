import styled from "styled-components";

export const StyledFormHeaderDiv = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	padding-bottom: 0.75rem;
	border-bottom: 1px solid ${({ theme }) => theme.colors.border};
	width: calc(100% + 2rem);
	margin-left: -1rem;
	padding-left: 1rem;
`;

export const StyledFormHeaderTitle = styled.h2`
	font-size: 2rem;
	font-weight: 700;
`;

export const StyledFormHeaderSubtitle = styled.p`
	font-size: 0.95rem;
	font-weight: 500;
	color: ${({ theme }) => theme.colors.textSecondary};
`;
