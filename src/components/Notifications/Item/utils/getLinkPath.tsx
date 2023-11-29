import { INotification } from "../../types/NotificationType";

const getLinkPath = (notification: INotification) => {
	console.log(notification);

	switch (notification.type) {
		case "request received":
			return `/friends/requests/${notification.from._id}`;
		case "request accepted":
			return `/user/${notification.from._id}`;
		case "birthday":
			return `/user/${notification.from._id}`;
		default:
			return "";
	}
};

export default getLinkPath;
