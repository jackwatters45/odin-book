import styled from "styled-components";

export const StyledFriendsHomeSectionHeader = styled.div`
	display: flex;
	justify-content: space-between;

	padding: 1.25rem 1rem;

	> a {
		font-size: 1.05rem;
		color: ${({ theme }) => theme.colors.blueText};
	}
`;
