import { INotification } from "../../types/NotificationType";

const getLinkPath = (notification: INotification) => {
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
