import { ReactNode } from "react";

import { INotification } from "../../types/NotificationType";
import useNotificationItemContainer from "./useNotificationItemContainer";
import {
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
		<StyledNotificationItemContainerLink to={to}>
			{children}
		</StyledNotificationItemContainerLink>
	) : (
		<StyledNotificationItemContainerButton onClick={handleOpenViewPost}>
			{children}
		</StyledNotificationItemContainerButton>
	);
};

export default NotificationItemContainer;
