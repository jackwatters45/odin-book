import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledFriendsNavOption = styled(NavLink)`
	display: flex;
	align-items: center;
	padding: 0.5rem;
	border-radius: 0.375rem;
	gap: 0.75rem;

	color: ${({ theme }) => theme.colors.textPrimary};

	font-size: 1.05rem;
	font-weight: 600;

	&:hover {
		background: ${({ theme }) => theme.colors.hoverOverlay};
	}

	&.active {
		background: ${({ theme }) => theme.colors.hoverOverlay};

		svg {
			color: ${({ theme }) => theme.colors.blueButtonTextColor};
			background: ${({ theme }) => theme.colors.blueButton};
		}
	}
`;
