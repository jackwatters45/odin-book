import styled from "styled-components";

export const StyledLabelSubtitle = styled.div`
	padding: 1rem 0;
	font-weight: 500;
	line-height: 1.2;
`;

export const StyledInputRow = styled.div`
	display: flex;
	gap: 1rem;

	> div {
		flex-grow: 1;
	}

	@media (max-width: 900px) {
		flex-direction: column-reverse;
	}
`;

export const StyledCodeSentTo = styled.div`
	font-weight: 500;
	font-size: 0.9rem;
	line-height: 1.2;
	height: 56px;
	padding: 0.25rem;

	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

export const StyledButtonsContainer = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: 0.5rem;
	padding-top: 1rem;
	width: calc(100% + 2rem);
	border-top: solid 1px ${({ theme }) => theme.colors.border};
	margin-left: -1rem;
	padding-right: 1rem;

	> div {
		display: flex;
		gap: 0.5rem;
	}
`;
