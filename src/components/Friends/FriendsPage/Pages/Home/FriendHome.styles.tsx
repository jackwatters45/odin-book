import styled from "styled-components";

import { StyledNavShadowX } from "@/styles/SharedStyles";

export const StyledFriendsHomeContainer = styled.div`
	height: calc(100vh - 56px);
	display: flex;
	position: relative;

	@media (max-width: 800px) {
		flex-direction: column;
	}
`;

export const StyledNavShadowXFriendsHome = styled(StyledNavShadowX)`
	bottom: unset;
`;
