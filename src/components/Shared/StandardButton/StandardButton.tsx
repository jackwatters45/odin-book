import Icon from "@mdi/react";

import { StyledStandardButton, StyledStandardButtonLink } from "./StandardButton.styles";
import { HTMLAttributes } from "react";

export type colorClassTypes =
	| "standard"
	| "blue"
	| "overlay"
	| "light-blue"
	| "transparent"
	| "transparent-blue"
	| "white";

export interface StandardButtonProps extends HTMLAttributes<HTMLElement> {
	text: string | undefined;

	to?: string;
	icon?: string;

	iconSize?: number;
	iconColor?: string;
	showText?: boolean;
	disabled?: boolean;
	colorClass?: colorClassTypes;
	type?: "button" | "submit" | "reset";
}

const StandardButton = ({
	text,
	onClick,
	icon,
	to,
	className,
	iconSize = 1,
	iconColor,
	showText = true,
	disabled,
	colorClass = "standard",
	type = "button",
	...props
}: StandardButtonProps) => {
	const sharedElements = (
		<>
			{icon && <Icon path={icon} size={iconSize} color={iconColor} />}
			{showText && <span>{text}</span>}
		</>
	);

	return !to ? (
		<StyledStandardButton
			className={`${className} ${colorClass}`}
			onClick={onClick}
			disabled={disabled}
			type={type}
			{...props}
		>
			{sharedElements}
		</StyledStandardButton>
	) : (
		<StyledStandardButtonLink
			className={`${className} ${colorClass}`}
			to={to}
			onClick={onClick}
			{...props}
		>
			{sharedElements}
		</StyledStandardButtonLink>
	);
};

export default StandardButton;
