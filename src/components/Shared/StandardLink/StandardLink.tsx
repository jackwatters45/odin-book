import { Link } from "react-router-dom";
import { StyledButton } from "./StandardLink.styles";

interface StandardLinkProps {
	text: string;
	to?: string;
	onClick?: () => void;
	className?: string;
}

const StandardLink = ({ to, text, onClick, className }: StandardLinkProps) => {
	return (
		<StyledButton onClick={onClick} className={className}>
			{to ? <Link to={to}>{text}</Link> : <span>{text}</span>}
		</StyledButton>
	);
};

export default StandardLink;
