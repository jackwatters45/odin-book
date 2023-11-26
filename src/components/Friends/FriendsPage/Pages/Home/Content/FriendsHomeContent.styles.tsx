import styled from "styled-components";

export const StyledFriendsHomeContainer = styled.div`
	padding: 1.25rem;
`;

export const StyledHr = styled.hr`
	margin: 0.75rem 0 0.5rem;
	border: none;
	height: 1px;
	background-color: ${({ theme }) => theme.colors.border};
`;
