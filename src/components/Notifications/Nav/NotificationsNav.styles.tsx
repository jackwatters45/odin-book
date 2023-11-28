import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledNotificationsNav = styled.nav`
	display: flex;
	align-items: center;
	gap: 0.75rem;
	margin: 0.25rem 0.75rem 0;
`;

export const StyledNotificationsNavLink = styled(NavLink)`
	font-size: 0.95rem;
	font-weight: 600;
	padding: 0.5rem 0.75rem;
	color: ${({ theme }) => theme.colors.textPrimary};

	&:hover {
		background-color: ${({ theme }) => theme.colors.hoverOverlay};
		border-radius: 1rem;
	}

	&.active {
		background-color: ${({ theme }) => theme.colors.secondaryBlueButton};
		color: ${({ theme }) => theme.colors.blueText};
		border-radius: 1rem;
	}
`;
