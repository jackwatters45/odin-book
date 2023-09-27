import Icon from "@mdi/react";

import { StyledStandardButton, StyledStandardButtonLink } from "./StandardButton.styles";

export interface StandardButtonProps {
	text: string | undefined;
	onClick?: () => void;

	to?: string;
	icon?: string;
	className?: string;

	iconSize?: number;
	iconColor?: string;
	showText?: boolean;
	disabled?: boolean;
	colorClass?: "standard" | "blue" | "overlay" | "light-blue" | "transparent";
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
		>
			{sharedElements}
		</StyledStandardButton>
	) : (
		<StyledStandardButtonLink className={`${className} ${colorClass}`} to={to}>
			{sharedElements}
		</StyledStandardButtonLink>
	);
};

export default StandardButton;
