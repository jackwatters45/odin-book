import styled from "styled-components";

import NavLink from "@/components/Nav/NavLink";
import { ContainerWidth } from "../context/ContainerWidthType";

export const StyledProfileNavContainer = styled.div`
	position: relative;
`;

export const StyledProfileNavContents = styled.nav`
	display: flex;
	padding: 0 1rem;
	height: 60px;
`;

export const StyledProfileLink = styled(NavLink)<ContainerWidth>`
	display: flex;
	align-items: center;

	height: calc(100% - 0.5rem);
	font-size: 0.95rem;
	font-weight: 600;

	padding: 0.75rem 1rem;
	margin: 0.25rem 0;
	border-radius: 0.375rem;
	position: relative;

	&:not(.active):hover {
		background: ${({ theme }) => theme.colors.hoverOverlay};
	}

	&.active {
		color: ${({ theme }) => theme.colors.selectedBlue};
	}

	&.active::after {
		content: "";
		position: absolute;
		width: 100%;
		height: 100%;
		left: 0;
		bottom: 0;
		border-bottom: 3px solid ${({ theme }) => theme.colors.selectedBlue};
		margin-bottom: -5px;
		border-radius: 0;
	}

	${({ $containerWidth }) => {
		if ($containerWidth <= 400) {
			return `
		// font-size: 0.9rem;
			padding: 0.5rem 0.75rem;
			`;
		}
	}}
`;
