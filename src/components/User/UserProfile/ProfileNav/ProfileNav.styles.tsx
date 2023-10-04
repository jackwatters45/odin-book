import styled from "styled-components";
import { Nav, NavLink } from "@jackwatters/simple-nav";

export const StyledProfileNavContainer = styled.div`
	position: relative;
`;

export const StyledProfileNavContents = styled(Nav)`
	display: flex;
	padding: 0 1rem;
	height: 60px;
`;

export const StyledProfileLink = styled(NavLink)`
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
			width: 100%;
			border-radius: 0.375rem;
			position: relative;

			&:not(.active):hover {
				background: ${({ theme }) => theme.colors.hoverOverlay};
			}
		}

		a.active::after {
			content: "";
			position: absolute;
			width: 100%;
			height: 100%;
			left: 0;
			bottom: 0;
			border-bottom: 3px solid ${({ theme }) => theme.colors.selectedBlue};
			color: ${({ theme }) => theme.colors.selectedBlue};
			margin-bottom: -5px;
			border-radius: 0;
		}
	}
`;
