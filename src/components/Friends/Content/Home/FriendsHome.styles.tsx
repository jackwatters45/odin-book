import styled from "styled-components";

export const StyledHr = styled.hr`
	margin: 1.5rem 0 0.5rem;
	border: none;
	height: 1px;
	background-color: ${({ theme }) => theme.colors.border};
`;
