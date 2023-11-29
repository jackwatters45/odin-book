import {
	NotificationContentType,
	NotificationType,
} from "@/components/Notifications/types/NotificationType";
import { UserPreview } from "@/types/IPost";
import { ITitleSegment } from "@/utils/render/titleSegment/titleSegments";

const getNotificationTitleSegments = (
	type: NotificationType,
	user: UserPreview,
	contentType: NotificationContentType | undefined,
): ITitleSegment[] => {
	switch (type) {
		case "request received":
			return [
				{ type: "bold", content: user.fullName },
				{ type: "text", content: " sent you a friend request" },
			];
		case "request accepted":
			return [
				{ type: "text", content: "New friend: You can now check out " },
				{ type: "bold", content: user.fullName },
				{ type: "text", content: "'s posts" },
			];
		case "comment":
			return [
				{ type: "bold", content: user.fullName },
				{
					type: "text",
					content:
						contentType === "post"
							? " commented on your post"
							: " replied to your comment",
				},
			];
		case "reaction":
			return [
				{ type: "bold", content: user.fullName },
				{ type: "text", content: ` reacted to your ${contentType}` },
			];
		case "birthday":
			return [
				{ type: "text", content: "It's " },
				{ type: "bold", content: user.fullName },
				{ type: "text", content: "'s birthday today" },
			];
	}
};

export default getNotificationTitleSegments;
