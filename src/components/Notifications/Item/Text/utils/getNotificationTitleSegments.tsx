import { NotificationType } from "@/components/Notifications/types/NotificationType";
import { UserPreview } from "@/types/IPost";
import { ITitleSegment } from "@/utils/render/titleSegment/titleSegments";

const getNotificationTitleSegments = (
	type: NotificationType,
	user: UserPreview,
): ITitleSegment[] => {
	switch (type) {
		case "friend request":
			return [
				{ type: "link", content: user.fullName, linkTo: `/user/${user._id}` },
				{ type: "text", content: " sent you a friend request" },
			];
		case "friend accepted":
			return [
				{ type: "text", content: "New friend: You can now check out " },
				{ type: "link", content: user.fullName, linkTo: `/user/${user._id}` },
				{ type: "text", content: "'s posts" },
			];
		case "comment":
			return [
				{ type: "link", content: user.fullName, linkTo: `/user/${user._id}` },
				{ type: "text", content: " commented on your post" },
			];
		case "like":
			return [
				{ type: "link", content: user.fullName, linkTo: `/user/${user._id}` },
				{ type: "text", content: " liked your post" },
			];
		case "birthday":
			return [
				{ type: "text", content: "It's " },
				{ type: "link", content: user.fullName, linkTo: `/user/${user._id}` },
				{ type: "text", content: "'s birthday today" },
			];
	}
};

export default getNotificationTitleSegments;
