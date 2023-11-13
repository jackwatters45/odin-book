import { UserPreview } from "@/types/IPost";

export interface FriendPreview extends UserPreview {
	mutualFriends: UserPreview[];
}
