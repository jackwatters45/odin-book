import { INotification } from "../types/NotificationType";
import NotificationItemContainer from "./Container/NotificationItemContainer";
import NotificationItemIcons from "./Icons";
import {
	StyledNotificationFriendRequestButtons,
	StyledNotificationItemContent,
	StyledNotificationItemMiddleRow,
	StyledResponseText,
} from "./NotificationItem.styles";
import NotificationItemText from "./Text";
import useNotificationItem from "./useNotificationItem";

export interface NotificationItemProps {
	notification: INotification;
}

const NotificationItem = ({ notification }: NotificationItemProps) => {
	const { isRequest, responseState, handleClickAccept, handleClickDecline } =
		useNotificationItem({ notification });

	return (
		<NotificationItemContainer notification={notification}>
			<StyledNotificationItemContent>
				<NotificationItemIcons type={notification.type} from={notification.from} />
				<StyledNotificationItemMiddleRow className={notification.isRead ? "read" : ""}>
					<NotificationItemText notification={notification} />
					{isRequest &&
						(responseState === "accepted" ? (
							<StyledResponseText>Request accepted</StyledResponseText>
						) : responseState === "declined" ? (
							<StyledResponseText>Request removed</StyledResponseText>
						) : (
							<StyledNotificationFriendRequestButtons
								buttonOptions={[
									{
										text: "Accept",
										colorClass: "blue",
										onClick: handleClickAccept,
									},
									{
										text: "Delete",
										colorClass: "standard",
										onClick: handleClickDecline,
									},
								]}
							/>
						))}
				</StyledNotificationItemMiddleRow>
			</StyledNotificationItemContent>
		</NotificationItemContainer>
	);
};

export default NotificationItem;
