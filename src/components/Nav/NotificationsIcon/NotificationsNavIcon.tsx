import { mdiBell, mdiBellOutline } from "@mdi/js";
import Icon from "@mdi/react";

import useNotificationsNavIcon from "./useNotificationsNavIcon";
import { StyledNotificationsCount } from "./NotificationsNavIcon.styles";
import formatNumberDisplay from "@/utils/format/formatNumberDisplay";

interface NotificationsNavIconProps {
	isNotificationsActive: boolean;
}

const NotificationsNavIcon = ({ isNotificationsActive }: NotificationsNavIconProps) => {
	const { notificationCount } = useNotificationsNavIcon();

	return (
		<div>
			<Icon
				path={isNotificationsActive ? mdiBell : mdiBellOutline}
				size={1.2}
				color={isNotificationsActive ? "#1b74e4" : "#65676B"}
			/>
			{notificationCount > 0 && (
				<StyledNotificationsCount>
					{formatNumberDisplay(notificationCount)}
				</StyledNotificationsCount>
			)}
		</div>
	);
};

export default NotificationsNavIcon;
