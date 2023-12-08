import { Fragment } from "react";

import { INotification } from "../../types/NotificationType";
import formatTimeSince from "@/utils/dateHelpers/formatTimeSince";
import {
	StyledNotificationItemTextContainer,
	StyledNotificationItemTextContent,
	StyledNotificationItemTextTime,
} from "./NotificationItemText.styles";
import useNotificationItemText from "./useNotificationItemText";

interface NotificationItemTextProps {
	notification: INotification;
}

const NotificationItemText = ({ notification }: NotificationItemTextProps) => {
	const { title, renderTitleSegments } = useNotificationItemText({
		notification,
	});

	return (
		<StyledNotificationItemTextContainer>
			<StyledNotificationItemTextContent>
				{title.map((segment, index) => (
					<Fragment key={index}>{renderTitleSegments(segment)}</Fragment>
				))}
			</StyledNotificationItemTextContent>
			<StyledNotificationItemTextTime>
				{formatTimeSince(notification.createdAt)}
			</StyledNotificationItemTextTime>
		</StyledNotificationItemTextContainer>
	);
};

export default NotificationItemText;
