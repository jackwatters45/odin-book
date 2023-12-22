import getLinkPath from "../utils/getLinkPath";
import { INotification } from "../../types/NotificationType";
import useViewPostContext from "@/components/Post/ViewPost/context/useViewPostContext";
import { NotificationResponseState } from "../useNotificationItem";

const useNotificationItemContainer = (
	notification: INotification,
	responseState: NotificationResponseState,
) => {
	// get link path
	const to = getLinkPath(notification, responseState);

	// open view post dialog
	const { isOpen, openDialog } = useViewPostContext();

	const postId = (notification.postId || notification.contentId) as string;
	const authorName = notification.from[0]?.fullName;

	const handleOpenViewPost = () => (!isOpen ? openDialog({ postId, authorName }) : null);

	return { to, handleOpenViewPost };
};

export default useNotificationItemContainer;
