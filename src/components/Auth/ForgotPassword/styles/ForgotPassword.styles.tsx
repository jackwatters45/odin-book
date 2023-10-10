import styled from "styled-components";

export const StyledRecoverHeader = styled.h2`
	font-size: 1.2rem;
	font-weight: 700;
	padding: 0.25rem 0 1.25rem;
	border-bottom: solid 1px ${({ theme }) => theme.colors.border};
	width: calc(100% + 2rem);
	margin-left: -1rem;
	padding-left: 1rem;
`;
