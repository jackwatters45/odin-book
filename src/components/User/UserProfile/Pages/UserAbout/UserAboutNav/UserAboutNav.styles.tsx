import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledUserAboutNav = styled.nav`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	padding: 1.25rem 0;
`;

export const StyledUserAboutNavItem = styled(NavLink)`
	padding: 0.625rem 0.625rem;
	margin-left: -0.625rem;
	width: calc(100% + 1.25rem);
	font-size: 0.95rem;
	height: 2.25rem;
	display: flex;
	align-items: center;
	font-weight: 700;
	color: ${({ theme }) => theme.colors.textPrimary};
	border-radius: 0.375rem;

	&:hover {
		background-color: ${({ theme }) => theme.colors.hoverOverlay};
	}

	&.active {
		color: ${({ theme }) => theme.colors.secondaryBlueButtonTextColor};
		background-color: ${({ theme }) => theme.colors.secondaryBlueButton};
	}
`;
