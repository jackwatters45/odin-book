import { ReactNode } from "react";

import MarkAsReadDot from "../MarkAsReadDot";
import useNotificationItemContainer from "./useNotificationItemContainer";
import { INotification } from "../../types/NotificationType";
import {
	StyledNotificationItemContainer,
	StyledNotificationItemContainerButton,
	StyledNotificationItemContainerLink,
} from "./NotificationItemContainer.styles";

interface NotificationItemContainerProps {
	notification: INotification;
	children: ReactNode;
}

const NotificationItemContainer = ({
	notification,
	children,
}: NotificationItemContainerProps) => {
	const { to, handleOpenViewPost } = useNotificationItemContainer(notification);

	return to ? (
		<StyledNotificationItemContainer>
			<StyledNotificationItemContainerLink to={to}>
				{children}
			</StyledNotificationItemContainerLink>
			<MarkAsReadDot notificationId={notification._id} isRead={notification.isRead} />
		</StyledNotificationItemContainer>
	) : (
		<StyledNotificationItemContainer>
			<StyledNotificationItemContainerButton onClick={handleOpenViewPost}>
				{children}
			</StyledNotificationItemContainerButton>
			<MarkAsReadDot notificationId={notification._id} isRead={notification.isRead} />
		</StyledNotificationItemContainer>
	);
};

export default NotificationItemContainer;
