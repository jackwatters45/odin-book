import { UserPreview } from "./IPost";

export interface UserPreviewWithMutuals extends UserPreview {
	mutualFriends: UserPreview[];
}
