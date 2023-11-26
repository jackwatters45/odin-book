import { ReactNode } from "react";
import { NavLinkProps } from "react-router-dom";

import { StyledNavLink } from "./ExtendedNavLink.styles";

interface ExtendedNavLinkProps extends NavLinkProps {
	text?: string;
	icon?: ReactNode;
	isActive?: boolean;
}
const NavLink = ({
	icon,
	text,
	isActive,
	to,
	className,
	...props
}: ExtendedNavLinkProps) => (
	<StyledNavLink
		to={to}
		$isIcon={!!icon}
		className={`${className || ""}${isActive ? " active" : ""}`}
		{...props}
	>
		{icon && icon}
		{text && <span>{text}</span>}
	</StyledNavLink>
);

export default NavLink;
