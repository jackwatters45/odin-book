import { mdiPlusCircleOutline } from "@mdi/js";
import { StyledAddDetailLink } from "./AddDetailLink.styles";

interface AddDetailLinkProps {
	text: string | undefined;
	onClick?: () => void;
	to?: string;
}

const AddDetailLink = ({ text, onClick, to }: AddDetailLinkProps) => {
	return (
		<StyledAddDetailLink
			colorClass="transparent"
			onClick={onClick}
			text={text}
			icon={mdiPlusCircleOutline}
			iconSize={1.1}
			className="underline-hover"
			to={to}
		/>
	);
};

export default AddDetailLink;
