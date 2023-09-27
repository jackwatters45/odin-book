import styled from "styled-components";
import { Nav, NavLink } from "@jackwatters/simple-nav";

export const ProfileNavContainer = styled.div`
	position: relative;
`;

export const ProfileNavContents = styled(Nav)`
	display: flex;
	padding: 0 1rem;
	height: 60px;
`;

export const ProfileLink = styled(NavLink)`
	display: flex;
	align-items: center;

	button {
		height: calc(100% - 0.5rem);
		font-size: 0.95rem;
		font-weight: 600;

		a {
			padding: 0.75rem 1rem;
			margin: 0.25rem 0;
			height: 100%;
			border-radius: 0.375rem;

			&:not(.active):hover {
				background: ${({ theme }) => theme.colors.hoverOverlay};
			}
		}

		a.active {
			border-bottom: 3px solid ${({ theme }) => theme.colors.selectedBlue};
			color: ${({ theme }) => theme.colors.selectedBlue};
			margin-bottom: -0.25rem;
			border-radius: 0;
		}
	}
`;
