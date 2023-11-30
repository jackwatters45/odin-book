import { NotificationType } from "../../types/NotificationType";
import getNotificationTypeIcon from "./utils/getNotificationTypeIcon";

const useNotificationItemIcons = (type: NotificationType) => {
	const { typeIcon, IconBackgroundColor } = getNotificationTypeIcon(type);

	const isLink = type === "reaction" || type === "comment" || type === "birthday";

	return { typeIcon, IconBackgroundColor, isLink };
};

export default useNotificationItemIcons;
