import { HTMLAttributes, ReactNode } from "react";
import { StyledButton } from "./NavButton.styles";

interface NavButtonProps extends HTMLAttributes<HTMLButtonElement> {
	icon?: ReactNode;
	text: string;
	onClick?: () => void;
}

const NavButton = ({ icon, text, onClick, ...props }: NavButtonProps) => {
	return (
		<StyledButton {...props} onClick={onClick}>
			{icon && icon}
			<span>{text}</span>
		</StyledButton>
	);
};

export default NavButton;
