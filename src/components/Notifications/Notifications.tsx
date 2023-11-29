import NotificationsNav from "./Nav";
import NotificationItem from "./Item";
import useNotifications from "./useNotifications";
import MarkAllAsRead from "./MarkAllAsRead";
import { StyledNotificationsSection, StyledSectionTitle } from "./Notifications.styles";
import {
	StyledCenteredContainer,
	StyledCenteredContainerContent,
} from "@/styles/SharedStyles";
import Loading from "../Shared/Loading";

// TODO birthdays (how to trigger?)
// TODO paginationv (+ make sure gets are working)

// TODO websockets
const Notifications = () => {
	const { newNotifications, earlierNotifications, isLoading, isUnreadNotification } =
		useNotifications();

	return isLoading ? (
		<Loading />
	) : (
		<StyledCenteredContainer>
			<StyledCenteredContainerContent>
				<StyledNotificationsSection
					title="Notifications"
					rightColumn={<MarkAllAsRead isUnreadNotification={isUnreadNotification} />}
				>
					<NotificationsNav />
					{newNotifications && newNotifications.length > 0 && (
						<>
							<StyledSectionTitle>New</StyledSectionTitle>
							{newNotifications.map((notification) => (
								<NotificationItem key={notification._id} notification={notification} />
							))}
						</>
					)}
					{earlierNotifications && earlierNotifications.length > 0 && (
						<>
							<StyledSectionTitle>Earlier</StyledSectionTitle>
							{earlierNotifications.map((notification) => (
								<NotificationItem key={notification._id} notification={notification} />
							))}
						</>
					)}
				</StyledNotificationsSection>
			</StyledCenteredContainerContent>
		</StyledCenteredContainer>
	);
};

export default Notifications;
