import { Notification } from "../types/NotificationType";
import NotificationItemIcons from "./Icons";
import {
	MarkAsReadDot,
	StyledNotificationItemContainer,
	StyledNotificationItemContent,
} from "./NotificationItem.styles";
import NotificationItemText from "./Text";

interface NotificationItemProps {
	notification: Notification;
}

const NotificationItem = ({ notification }: NotificationItemProps) => {
	return (
		<StyledNotificationItemContainer>
			<StyledNotificationItemContent>
				<NotificationItemIcons type={notification.type} user={notification.user} />
				<NotificationItemText notification={notification} />
			</StyledNotificationItemContent>
			<MarkAsReadDot onClick={() => console.log("mark as read")} />
		</StyledNotificationItemContainer>
	);
};

export default NotificationItem;
