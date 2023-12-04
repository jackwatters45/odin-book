import getLinkPath from "../utils/getLinkPath";
import { INotification } from "../../types/NotificationType";
import useViewPostContext from "@/components/Post/ViewPost/context/useViewPostContext";

const useNotificationItemContainer = (notification: INotification) => {
	// get link path
	const to = getLinkPath(notification);

	// open view post dialog
	const { isOpen, openDialog } = useViewPostContext();

	const postId = (notification.postId || notification.contentId) as string;
	const authorName = notification.from[0].fullName;

	const handleOpenViewPost = () => (!isOpen ? openDialog({ postId, authorName }) : null);

	return { to, handleOpenViewPost };
};

export default useNotificationItemContainer;
