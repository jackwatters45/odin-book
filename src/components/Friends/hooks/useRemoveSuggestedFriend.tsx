import { InfiniteData, useQueryClient } from "@tanstack/react-query";

import useCurrentUserCached from "@/hooks/useCurrentUserCached";
import { UserPreviewWithMutuals } from "@/types/UserPreviewWithMutuals";

type InfiniteFriendsSuggestions = InfiniteData<UserPreviewWithMutuals[]>;

const useRemoveSuggestedFriend = (userId: string) => {
	const queryClient = useQueryClient();

	const currentUserId = useCurrentUserCached()?._id as string;

	return () =>
		queryClient.setQueryData<InfiniteFriendsSuggestions>(
			[currentUserId, "friends", "suggestions"],
			(prevData) => {
				if (!prevData) return prevData;
				return {
					pages: prevData.pages.map((page) => page.filter((u) => u._id !== userId)),
					pageParams: prevData.pageParams,
				};
			},
		);
};

export default useRemoveSuggestedFriend;
