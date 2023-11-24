import styled from "styled-components";

export const StyledFriendsNav = styled.nav`
	min-width: 360px;
	display: flex;
	flex-direction: column;
	position: sticky;
	top: 0;
	overflow-y: auto;

	scrollbar-width: none;
	-ms-overflow-style: none;
	&::-webkit-scrollbar {
		width: 0;
		height: 0;
	}
`;

export const StyledNavHeader = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 1rem;
`;

export const StyledNavHeaderH2 = styled.h2`
	font-size: 1.5rem;
	font-weight: 700;
`;

export const StyledFriendsNavOptions = styled.div`
	padding: 0 0.5rem;
`;
