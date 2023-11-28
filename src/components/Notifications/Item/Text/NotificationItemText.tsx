import { Fragment } from "react";

import { Notification } from "../../types/NotificationType";
import formatTimeSince from "@/utils/dateHelpers/formatTimeSince";
import renderTitleSegment from "@/utils/render/titleSegment/titleSegments";
import getNotificationTitleSegments from "./utils/getNotificationTitleSegments";
import {
	StyledNotificationItemTextContainer,
	StyledNotificationItemTextContent,
	StyledNotificationItemTextTime,
} from "./NotificationItemText.styles";

interface NotificationItemTextProps {
	notification: Notification;
}

const NotificationItemText = ({
	notification: { user, type, time },
}: NotificationItemTextProps) => {
	const title = getNotificationTitleSegments(type, user);

	return (
		<StyledNotificationItemTextContainer>
			<StyledNotificationItemTextContent>
				{title.map((segment, index) => (
					<Fragment key={index}>{renderTitleSegment(segment)}</Fragment>
				))}
			</StyledNotificationItemTextContent>
			<StyledNotificationItemTextTime>
				{formatTimeSince(time)}
			</StyledNotificationItemTextTime>
		</StyledNotificationItemTextContainer>
	);
};

export default NotificationItemText;
