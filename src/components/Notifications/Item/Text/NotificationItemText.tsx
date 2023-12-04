import { Fragment } from "react";

import { INotification } from "../../types/NotificationType";
import formatTimeSince from "@/utils/dateHelpers/formatTimeSince";
import renderTitleSegment from "@/utils/render/titleSegment/titleSegments";
import getNotificationTitleSegments from "./utils/getNotificationTitleSegments";
import {
	StyledNotificationItemTextContainer,
	StyledNotificationItemTextContent,
	StyledNotificationItemTextTime,
} from "./NotificationItemText.styles";

interface NotificationItemTextProps {
	notification: INotification;
}

const NotificationItemText = ({
	notification: { from, type, updatedAt, contentType },
}: NotificationItemTextProps) => {
	const title = getNotificationTitleSegments(type, from, contentType);

	return (
		<StyledNotificationItemTextContainer>
			<StyledNotificationItemTextContent>
				{title.map((segment, index) => (
					<Fragment key={index}>{renderTitleSegment(segment)}</Fragment>
				))}
			</StyledNotificationItemTextContent>
			<StyledNotificationItemTextTime>
				{formatTimeSince(updatedAt)}
			</StyledNotificationItemTextTime>
		</StyledNotificationItemTextContainer>
	);
};

export default NotificationItemText;
