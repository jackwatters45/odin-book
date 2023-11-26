import styled from "styled-components";

import NavDropdown from "../NavDropdown/NavDropdown";

export const SearchNavDropdown = styled(NavDropdown)`
	dialog {
		position: absolute;
		top: 0;
		left: 0;
		margin: 0;
	}

	@media (max-width: 400px) {
		display: none;
	}
`;
