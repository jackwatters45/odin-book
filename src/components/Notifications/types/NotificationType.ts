import { UserPreview } from "@/types/IPost";

export type NotificationType =
	| "friend request"
	| "friend accepted"
	| "comment"
	| "like"
	| "birthday";

export interface Notification {
	_id: string;
	type: NotificationType;
	user: UserPreview;
	time: string;
}
