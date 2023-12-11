import { UserPreview } from "./IPost";
import { UserStatusType } from "./UserStatusType";

export interface UserPreviewWithMutuals extends UserPreview {
	mutualFriends: UserPreview[];
	status: UserStatusType;
}
