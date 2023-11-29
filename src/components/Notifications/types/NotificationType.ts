import { UserPreview } from "@/types/IPost";

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
	from: UserPreview;
	contentId?: string;
	contentType?: NotificationContentType;
	rootId?: string;
	isRead: boolean;
	createdAt: string;
	updatedAt: string;
}
