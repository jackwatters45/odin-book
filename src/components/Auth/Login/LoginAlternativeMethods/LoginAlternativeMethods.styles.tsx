import styled from "styled-components";

export const StyledAlternativeMethodsContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	align-items: center;
	padding: 0.25rem 0.25rem 0.75rem;
	border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export const StyledAlternativeMethodContainer = styled.div`
	display: flex;
	gap: 0.5rem;
`;

export const StyledAlternativeMethodsHeader = styled.span`
	color: ${({ theme }) => theme.colors.textSecondary};
	font-size: 0.9rem;
	font-weight: 700;
`;

export const StyledAlternativeMethod = styled.button`
	background-color: transparent;
	border: none;
	cursor: pointer;
	transition: all 0.2s ease-in-out;
	border-radius: 0.5rem;
	padding: 0.5rem 0.5rem 0.25rem;

	&:hover {
		background-color: ${({ theme }) => theme.colors.hoverBackground};
	}
`;
