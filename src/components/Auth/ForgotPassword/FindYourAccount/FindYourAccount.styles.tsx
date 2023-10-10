import styled from "styled-components";

export const StyledFindAccountSubHeader = styled.p`
	font-weight: 500;
	padding: 0.25rem 0 1.25rem;
`;

export const StyledButtonsContainer = styled.div`
	padding-top: 1rem;
	margin-top: 1.25rem;
	width: calc(100% + 2rem);
	margin-left: -1rem;
	padding-right: 1rem;
	border-top: solid 1px ${({ theme }) => theme.colors.border};

	display: flex;
	justify-content: end;
	gap: 0.5rem;
export `;
