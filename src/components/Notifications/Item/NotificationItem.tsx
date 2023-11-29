import { INotification } from "../types/NotificationType";
import NotificationItemContainer from "./Container/NotificationItemContainer";
import NotificationItemIcons from "./Icons";
import {
	MarkAsReadDot,
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
	const {
		handleClickMarkAsRead,
		isRequest,
		responseState,
		handleClickAccept,
		handleClickDecline,
	} = useNotificationItem({ notification });
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
			<MarkAsReadDot
				onClick={handleClickMarkAsRead}
				style={{ visibility: notification.isRead ? "hidden" : "visible" }}
			/>
		</NotificationItemContainer>
	);
};

export default NotificationItem;
