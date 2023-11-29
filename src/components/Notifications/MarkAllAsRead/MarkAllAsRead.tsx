import { mdiCheckCircleOutline } from "@mdi/js";
import Icon from "@mdi/react";
import { StyledMarkAllAsReadButton } from "./MarkAllAsRead.styles";
import useMarkAllAsRead from "./useMarkAllAsRead";

interface MarkAllAsReadProps {
	isUnreadNotification: boolean;
}

const MarkAllAsRead = ({ isUnreadNotification }: MarkAllAsReadProps) => {
	const { handleClickMarkAllAsRead } = useMarkAllAsRead({ isUnreadNotification });

	return (
		<StyledMarkAllAsReadButton onClick={handleClickMarkAllAsRead}>
			<Icon path={mdiCheckCircleOutline} size={0.9} color={"#65676B"} />
		</StyledMarkAllAsReadButton>
	);
};

export default MarkAllAsRead;
