import {
	StyledNotificationsNav,
	StyledNotificationsNavLink,
} from "./NotificationsNav.styles";

const NotificationsNav = () => (
	<StyledNotificationsNav>
		<StyledNotificationsNavLink to="/notifications/">All</StyledNotificationsNavLink>
		<StyledNotificationsNavLink to="/notifications/unread">
			Unread
		</StyledNotificationsNavLink>
	</StyledNotificationsNav>
);

export default NotificationsNav;
