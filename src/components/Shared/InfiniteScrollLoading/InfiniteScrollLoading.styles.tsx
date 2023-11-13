import styled from "styled-components";

export const StyledLoadingContainer = styled.div`
	margin-top: 1rem;
	position: relative;
	min-height: 80px;
	width: 100%;
	background-color: ${({ theme }) => theme.colors.backgroundPrimary};
	border-radius: 0.375rem;
	${({ theme }) => theme.cardShadow};
`;

export const StyledNoMoreText = styled.h2`
	margin-top: 1rem;
	font-size: 1.5rem;
	font-weight: 600;
	color: ${({ theme }) => theme.colors.textSecondary};
`;
