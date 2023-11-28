import { Link } from "react-router-dom";

import { ImageCircle } from "@/components/Nav/Nav.styles";
import { UserPreview } from "@/types/IPost";
import { NotificationType } from "../../types/NotificationType";
import getNotificationTypeIcon from "./utils/getNotificationTypeIcon";
import {
	StyledNotificationIconsContainer,
	StyledNotificationTypeIcon,
} from "./NotificationItemIcons.styles";

interface NotificationItemIconsProps {
	type: NotificationType;
	user: UserPreview;
}

const NotificationItemIcons = ({ type, user }: NotificationItemIconsProps) => {
	const { typeIcon, IconBackgroundColor } = getNotificationTypeIcon(type);

	return (
		<StyledNotificationIconsContainer>
			<Link to={`/user/${user._id}`}>
				<ImageCircle src={user.avatarUrl} alt={user.fullName} size={56} />
			</Link>
			<StyledNotificationTypeIcon
				path={typeIcon}
				size={1.15}
				color="white"
				background={IconBackgroundColor}
			/>
		</StyledNotificationIconsContainer>
	);
};

export default NotificationItemIcons;
