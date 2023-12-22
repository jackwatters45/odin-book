import { Link } from "react-router-dom";

import { ImageCircle } from "@/components/Nav/Nav.styles";
import { UserPreview } from "@/types/IPost";
import { NotificationType } from "../../types/NotificationType";
import useNotificationItemIcons from "./useNotificationItemIcons";
import {
	StyledNotificationIconsContainer,
	StyledNotificationTypeIcon,
} from "./NotificationItemIcons.styles";

interface NotificationItemIconsProps {
	type: NotificationType;
	from: UserPreview;
}

const NotificationItemIcons = ({ type, from }: NotificationItemIconsProps) => {
	const { isLink, typeIcon, IconBackgroundColor } = useNotificationItemIcons(type);
	return (
		<StyledNotificationIconsContainer>
			{isLink ? (
				<Link to={`/user/${from?._id}`} onClick={(e) => e.stopPropagation()}>
					<ImageCircle src={from?.avatarUrl} alt={from?.fullName} size={56} />
				</Link>
			) : (
				<ImageCircle src={from?.avatarUrl} alt={from?.fullName} size={56} />
			)}
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
