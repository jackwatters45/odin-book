import { mdiPlusCircleOutline } from "@mdi/js";
import { StyledAddDetailLink } from "./AddDetailLink.styles";

interface AddDetailLinkProps {
	text: string | undefined;
	onClick: () => void;
}

const AddDetailLink = ({ text, onClick }: AddDetailLinkProps) => {
	return (
		<StyledAddDetailLink
			colorClass="transparent"
			onClick={onClick}
			text={text}
			icon={mdiPlusCircleOutline}
			iconSize={1.1}
			className="underline-hover"
		/>
	);
};

export default AddDetailLink;
