import { css, styled } from "styled-components";
import { Nav, NavLink, NavDropdown, NavButton } from "@jackwatters/simple-nav";
import Icon from "@mdi/react";

export const StyledNavContainer = styled.div`
	position: relative;
`;

export const StyledNav = styled(Nav)`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 1.5rem;
	z-index: 3;
	position: relative;
`;

export const StyledSideNav = styled.div`
	display: flex;
	align-items: center;
	gap: 0.5rem;
`;

// TODO bottom border selected / hover unselected
export const StyledCenterNav = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-grow: 1;
	padding: 0 10vw;
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

	button {
		> a::before {
			${BeforeStyling}
		}

		> a:hover::before {
			background: ${({ theme }) => theme.colors.hoverOverlay};
		}
	}

	a,
	button {
		font-size: 0.95rem;
		display: flex;
		gap: 1rem;

		span {
			color: ${({ theme }) => theme.colors.textPrimary};
		}

		svg,
		span {
			z-index: 2;
		}
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

export const StyledDropdown = styled(NavDropdown)`
	.normal-dropdown-button {
		height: 2.5rem;
		width: 2.5rem;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.normal-dropdown-content {
		background-color: ${({ theme }) => theme.colors.backgroundPrimary};
		display: flex;
		min-width: 300px;
		${({ theme }) => theme.cardShadow};
	}
`;

export const NavLinkCenterColumn = styled(NavLink)`
	height: 100%;
	display: flex;

	> button {
		position: relative;

		> a {
			height: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
			padding: 0 4vw;

			svg {
				z-index: 100;
			}
		}

		> a.active {
			border-bottom: 3px solid ${({ theme }) => theme.colors.blueButton};
			margin-bottom: -3px;
		}

		> a::before {
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

		> a:hover::before {
			background: ${({ theme }) => theme.colors.hoverOverlay};
		}
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
	background: ${({ background, theme }) =>
		background || theme.colors.primaryButton}; // TODO theme
	padding: 0.5rem;
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
