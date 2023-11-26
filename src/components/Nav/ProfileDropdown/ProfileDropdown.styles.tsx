import styled from "styled-components";

import NavDropdown from "../NavDropdown";

export const StyledProfileNavDropdown = styled(NavDropdown)`
	position: relative;

	dialog {
		margin-left: -260px;
		right: 0;
		min-width: 300px;
	}

	li {
		display: flex;
	}

	button,
	a {
		flex-grow: 1;
		outline: none;
	}
`;
