import styled from "styled-components";

import NavDropdown from "../NavDropdown";

export const StyledProfileNavDropdown = styled(NavDropdown)`
	position: relative;
	max-height: 40px;

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
