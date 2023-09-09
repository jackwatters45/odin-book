import styled from "styled-components";
import { Nav, NavLink } from "@jackwatters/simple-nav";

export const ProfileNavContainer = styled(Nav)`
	display: flex;
	padding: 0 1rem;
	height: 60px;
`;

export const ProfileLink = styled(NavLink)`
	display: flex;
	align-items: center;

	button {
		height: 100%;
		font-size: 0.9rem;
		font-weight: 600;

		a {
			padding: 1rem;
			height: 100%;
		}

		a.active {
			border-bottom: 2px solid ${({ theme }) => theme.colors.selectedBlue};
			color: ${({ theme }) => theme.colors.selectedBlue};
		}
	}
`;
