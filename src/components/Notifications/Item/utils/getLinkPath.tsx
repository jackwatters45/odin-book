import { INotification } from "../../types/NotificationType";
import { NotificationResponseState } from "../useNotificationItem";

const getLinkPath = (
	notification: INotification,
	responseState: NotificationResponseState,
) => {
	if (responseState === "accepted") {
		return `/friends/all/${notification.from[0]._id}`;
	} else if (responseState === "declined") {
		return `/user/${notification.from[0]._id}`;
	}

	switch (notification.type) {
		case "request received":
			return `/friends/requests/${notification.from[0]._id}`;
		case "request accepted":
			return `/user/${notification.from[0]._id}`;
		case "birthday":
			return `/user/${notification.from[0]._id}`;
		default:
			return "";
	}
};

export default getLinkPath;
