import { UserPreview } from "@/types/IPost";
import { InfiniteData } from "@tanstack/react-query";

export type NotificationType =
	| "request received"
	| "request accepted"
	| "comment"
	| "reaction"
	| "birthday";

export type NotificationContentType = "post" | "comment";

export interface INotification {
	_id: string;
	type: NotificationType;
	to: string;
	from: UserPreview[];
	contentId?: string;
	contentType?: NotificationContentType;
	postId?: string;
	isRead: boolean;
	createdAt: string;
	updatedAt: string;
}

export type InfiniteNotificationsResults = InfiniteData<INotification[]>;
