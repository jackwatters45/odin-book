import MarkAllAsRead from "./MarkAllAsRead";
import { StyledNotificationsSection, StyledSectionTitle } from "./Notifications.styles";
import NotificationsNav from "./Nav";

import NotificationItem from "./Item/NotificationItem";
import { Notification } from "./types/NotificationType";

// TODO rename -> move
import {
	StyledDashboardContainer,
	StyledDashboardContentContainer,
} from "../Dashboard/Dashboard.styles";

const notification: Notification = {
	_id: "1",
	type: "birthday",
	user: {
		_id: "1",
		fullName: "John Doe",
		avatarUrl: "https://via.placeholder.com/150",
	},
	time: new Date().toISOString(),
};

// TODO friend requests part

// TODO make mark read buttons work + style
// TODO if read -> secondary text
// TODO conditional render of each section

// TODO populate with data
// new = last 24hr, earlier = before 24hrs (I think just do frontend)
// how to deal with multiple comments/like on same post
const Notifications = () => {
	return (
		<StyledDashboardContainer>
			<StyledDashboardContentContainer>
				<StyledNotificationsSection title="Notifications" rightColumn={<MarkAllAsRead />}>
					<NotificationsNav />
					<StyledSectionTitle>New</StyledSectionTitle>
					<NotificationItem notification={notification} />
					<StyledSectionTitle>Earlier</StyledSectionTitle>
				</StyledNotificationsSection>
			</StyledDashboardContentContainer>
		</StyledDashboardContainer>
	);
};

export default Notifications;
