import styled from "styled-components";

export const StyledLoadingContainer = styled.div`
	margin-top: 1rem;
	position: relative;
	min-height: 80px;
	width: 100%;
	border-radius: 0.375rem;
`;

export const StyledNoMoreText = styled.h2`
	margin-top: 1rem;
	font-size: 1.5rem;
	font-weight: 600;
	color: ${({ theme }) => theme.colors.textSecondary};
`;
