import {
	NotificationContentType,
	NotificationType,
} from "@/components/Notifications/types/NotificationType";
import { UserPreview } from "@/types/IPost";
import { ITitleSegment } from "@/utils/render/titleSegment/titleSegments";

const formatMultipleUsersText = (users: UserPreview[]): ITitleSegment[] => {
	const mostRecentUser = users?.[0];
	const secondMostRecentUser = users?.[1];

	if (users.length === 1)
		return [
			{
				type: "link",
				content: mostRecentUser.fullName,
				linkTo: `/user/${mostRecentUser._id}`,
			},
		];

	if (users.length === 2) {
		return [
			{
				type: "link",
				content: mostRecentUser.fullName,
				linkTo: `/user/${mostRecentUser._id}`,
			},
			{ type: "text", content: " and " },
			{
				type: "link",
				content: secondMostRecentUser.fullName,
				linkTo: `/user/${secondMostRecentUser._id}`,
			},
		];
	}

	return [
		{
			type: "link",
			content: mostRecentUser.fullName,
			linkTo: `/user/${mostRecentUser._id}`,
		},
		{ type: "text", content: " and " },
		{
			type: "text",
			content: `${users.length - 1} others`,
		},
	];
};

const getNotificationTitleSegments = (
	type: NotificationType,
	users: UserPreview[],
	contentType: NotificationContentType | undefined,
): ITitleSegment[] => {
	const mostRecentUser = users[0];

	switch (type) {
		case "request received":
			return [
				{ type: "bold", content: mostRecentUser.fullName },
				{ type: "text", content: " sent you a friend request" },
			];
		case "request accepted":
			return [
				{ type: "text", content: "New friend: You can now check out " },
				{ type: "bold", content: mostRecentUser.fullName },
				{ type: "text", content: "'s posts" },
			];
		case "comment":
			return [
				...formatMultipleUsersText(users),
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
				...formatMultipleUsersText(users),
				{ type: "text", content: ` reacted to your ${contentType}` },
			];
		case "birthday":
			return [
				{ type: "text", content: "It's " },
				{
					type: "link",
					content: mostRecentUser.fullName,
					linkTo: `/user/${mostRecentUser._id}`,
				},
				{ type: "text", content: "'s birthday today" },
			];
	}
};

export default getNotificationTitleSegments;
