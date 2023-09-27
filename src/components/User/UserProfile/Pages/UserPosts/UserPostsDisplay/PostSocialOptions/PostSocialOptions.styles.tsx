import styled from "styled-components";

export const StyledSocialOptionsContainer = styled.div`
	display: flex;
	justify-content: space-evenly;
	margin-top: 0.75rem;
	border-top: 1px solid ${({ theme }) => theme.colors.border};
	border-bottom: 1px solid ${({ theme }) => theme.colors.border};
	height: 3rem;
`;

export const StyledSocialOptionButton = styled.button`
	color: ${({ theme }) => theme.colors.textSecondary};
	flex-grow: 1;
	text-align: center;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 0.5rem;
	font-size: 0.95rem;
	font-weight: 600;
	height: 85%;
	margin-top: 0.25rem;

	&:hover {
		background-color: ${({ theme }) => theme.colors.hoverOverlay};
		border-radius: 0.5rem;
		transition: background-color 0.1s ease-in-out;
	}
`;
