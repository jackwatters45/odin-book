import { Link } from "react-router-dom";
import { StyledButton } from "./StandardLink.styles";
import { HTMLAttributes } from "react";

interface StandardLinkProps extends HTMLAttributes<HTMLButtonElement> {
	text: string;
	to?: string;
}

const StandardLink = ({ to, text, onClick, ...props }: StandardLinkProps) => {
	return (
		<StyledButton onClick={onClick} {...props}>
			{to ? <Link to={to}>{text}</Link> : <span>{text}</span>}
		</StyledButton>
	);
};

export default StandardLink;
