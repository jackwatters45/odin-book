import styled from "styled-components";

export const StyledPostSocialDisplayContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: space-between;
	gap: 0.5rem;
	padding: 0.75rem 0.5rem 0rem;
	min-height: 40px;
`;

export const StyledReactionsContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 0.5rem;
	font-size: 0.95rem;
`;

export const StyledCommentsSharesContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 0.5rem;

	font-weight: 400;
	color: ${({ theme }) => theme.colors.textSecondary};
	font-size: 0.95rem;

	> button {
		display: flex;
		align-items: center;
		gap: 0.25rem;
	}
`;
