import { css, styled } from "styled-components";
import Icon from "@mdi/react";
import NavLink from "./NavLink";
import NavButton from "./NavButton";
import NavDropdown from "./NavDropdown";

export const StyledNavContainer = styled.div`
	position: fixed;
	width: 100%;
	background-color: ${({ theme }) => theme.colors.backgroundPrimary};
	z-index: 999;
`;

export const StyledNav = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 1.5rem;
	z-index: 3;
	position: relative;

	@media (max-width: 400px) {
		padding: 0 0.5rem;
	}
`;

export const StyledSideNav = styled.div`
	display: flex;
	align-items: center;
	gap: 0.5rem;
`;

export const StyledCenterNav = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-grow: 1;
	height: 56px;
`;

const BeforeStyling = css`
	content: "";
	width: 105%;
	height: 100%;
	margin-left: -2.5%;
	display: block;
	position: absolute;
	border-radius: 0.5rem;
	z-index: 1;
`;

export const StyledDropdownLink = styled(NavLink)`
	position: relative;
	padding: 0.5rem 0rem;
	line-height: 0;
	align-items: center;
	font-size: 0.95rem;
	display: flex;
	gap: 1rem;

	&::before {
		${BeforeStyling}
	}

	&:hover::before {
		background: ${({ theme }) => theme.colors.hoverOverlay};
	}

	span {
		color: ${({ theme }) => theme.colors.textPrimary};
	}

	svg,
	span {
		z-index: 2;
	}
`;

export const StyledDropdownButton = styled(NavButton)`
	position: relative;
	padding: 0.5rem 0rem;

	font-size: 0.95rem;
	display: flex;
	gap: 1rem;
	width: 100%;

	&::before {
		${BeforeStyling}
	}

	&:hover::before {
		background: ${({ theme }) => theme.colors.hoverOverlay};
	}

	span {
		color: ${({ theme }) => theme.colors.textPrimary};
	}

	svg,
	span {
		z-index: 2;
	}
`;

const StyledDropdown = styled(NavDropdown)`
	.normal-dropdown-button {
		height: 2.5rem;
		width: 2.5rem;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.normal-dropdown-content {
		z-index: 1010;
		width: 320px;
		max-width: 100%;
		background-color: ${({ theme }) => theme.colors.backgroundPrimary};
		display: flex;
		${({ theme }) => theme.cardShadow};
	}
`;

export const StyledSearchDropdown = styled(StyledDropdown)`
	.normal-dropdown-content {
		top: 0;
		left: 0;
	}
`;

export const NavLinkCenterColumn = styled(NavLink)`
	height: 100%;
	display: flex;
	position: relative;
	align-items: center;
	justify-content: center;
	padding: 0 4vw;

	svg {
		z-index: 100;
	}

	&.active {
		border-bottom: 3px solid ${({ theme }) => theme.colors.blueButton};
		margin-bottom: -3px;
	}

	&::before {
		content: "";
		width: 85%;
		height: 85%;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		transition: background-color 0.3s ease;
		border-radius: 0.5rem;
	}

	&:hover::before {
		background: ${({ theme }) => theme.colors.hoverOverlay};
	}
`;

export const StyledCreatePostButton = styled.button`
	border-radius: 50%;
	position: relative;
	background-color: ${({ theme }) => theme.colors.primaryButton};

	&::before {
		content: "";
		width: 100%;
		height: 100%;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		transition: background-color 0.2s ease;
		border-radius: 50%;
	}

	&:hover::before {
		background: ${({ theme }) => theme.colors.hoverOverlay};
	}
`;

export const ImageCircle = styled.img<{ size?: number }>`
	border-radius: 50%;
	height: ${({ size }) => (size ? `${size}px` : "40px")};
	width: ${({ size }) => (size ? `${size}px` : "40px")};
`;

const CircleBackgroundCss = css<{ background?: string }>`
	border-radius: 50%;
	background: ${({ background, theme }) => background || theme.colors.primaryButton};
	padding: 0.375rem;
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
`;

export const IconCircleBackground = styled(Icon)<{ background?: string }>`
	${CircleBackgroundCss}
`;

export const EmojiCircleBackground = styled.div<{ background?: string }>`
	${CircleBackgroundCss}

	line-height: 1;
	font-size: "1.375rem";
`;

export const StyledFixedNavPadding = styled.div`
	padding-top: 56px;
`;
