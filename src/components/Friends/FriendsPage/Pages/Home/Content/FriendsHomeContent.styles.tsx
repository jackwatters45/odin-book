import styled from "styled-components";

export const StyledHr = styled.hr`
	margin: 0.75rem 0 0.5rem;
	border: none;
	height: 1px;
	background-color: ${({ theme }) => theme.colors.border};
`;
