import { mdiPlusCircleOutline } from "@mdi/js";
import Icon from "@mdi/react";
import { StyledAddDetailLink } from "./AddDetailLink.styles";

interface AddDetailLinkProps {
	text: string;
	to: string;
}

const AddDetailLink = ({ text, to }: AddDetailLinkProps) => {
	return (
		<StyledAddDetailLink to={to}>
			<span>
				<Icon path={mdiPlusCircleOutline} size={1.4} />
			</span>
			<span>{text}</span>
		</StyledAddDetailLink>
	);
};

export default AddDetailLink;
