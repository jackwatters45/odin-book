import NotificationsNav from "./Nav";
import NotificationItem from "./Item";
import useNotifications from "./useNotifications";
import MarkAllAsRead from "./MarkAllAsRead";
import { StyledNotificationsSection, StyledSectionTitle } from "./Notifications.styles";
import {
	InfiniteScrollLoadingPosts,
	StyledCenteredContainer,
	StyledCenteredContainerContent,
} from "@/styles/SharedStyles";
import Loading from "../Shared/Loading";

const Notifications = () => {
	const {
		newNotifications,
		earlierNotifications,
		isLoading,
		ref,
		isUnreadNotification,
		isFetchingNextPage,
		hasNextPage,
	} = useNotifications();

	return (
		<StyledCenteredContainer>
			<StyledCenteredContainerContent>
				<StyledNotificationsSection
					title="Notifications"
					rightColumn={<MarkAllAsRead isUnreadNotification={isUnreadNotification} />}
				>
					<NotificationsNav />
					{isLoading ? (
						<Loading />
					) : (
						<>
							{newNotifications && newNotifications.length > 0 && (
								<>
									<StyledSectionTitle>New</StyledSectionTitle>
									{newNotifications.map((notification) => (
										<NotificationItem
											key={notification._id}
											notification={notification}
										/>
									))}
								</>
							)}
							{earlierNotifications && earlierNotifications.length > 0 && (
								<>
									<StyledSectionTitle>Earlier</StyledSectionTitle>
									{earlierNotifications.map((notification) => (
										<NotificationItem
											key={notification._id}
											notification={notification}
										/>
									))}
								</>
							)}
							{hasNextPage && (
								<InfiniteScrollLoadingPosts
									ref={ref}
									isFetchingNextPage={isFetchingNextPage}
									isLoading={isLoading}
									hasNextPage={hasNextPage}
								/>
							)}
						</>
					)}
				</StyledNotificationsSection>
			</StyledCenteredContainerContent>
		</StyledCenteredContainer>
	);
};

export default Notifications;
