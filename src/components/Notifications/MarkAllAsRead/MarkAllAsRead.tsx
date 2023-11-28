import { mdiCheckCircleOutline } from "@mdi/js";
import Icon from "@mdi/react";
import { StyledMarkAllAsReadButton } from "./MarkAllAsRead.styles";

const MarkAllAsRead = () => {
	return (
		<StyledMarkAllAsReadButton onClick={() => console.log("Mark all as read")}>
			<Icon path={mdiCheckCircleOutline} size={0.9} />
		</StyledMarkAllAsReadButton>
	);
};

export default MarkAllAsRead;
