import { useQueryClient } from "@tanstack/react-query";

import useCurrentUserCached from "@/hooks/useCurrentUserCached";
import { FriendPreview } from "../types/FriendsTypes";

const useRemoveSuggestedFriend = (userId: string) => {
	const queryClient = useQueryClient();

	const currentUserId = useCurrentUserCached()?._id as string;

	return () =>
		queryClient.setQueryData<{ pages: FriendPreview[][] }>(
			[currentUserId, "friends", "suggestions"],
			(prevData) => {
				if (!prevData) return prevData;
				return {
					pages: prevData.pages.map((page) => {
						return page.filter((u) => u._id !== userId);
					}),
				};
			},
		);
};

export default useRemoveSuggestedFriend;
