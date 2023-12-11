import { InfiniteData, useQueryClient } from "@tanstack/react-query";

import useMutateCustom from "@/hooks/reactQuery/useMutateCustom";
import { IUser } from "@/types/IUser";
import useCurrentUserCached from "@/hooks/auth/useCurrentUserCached";

const useUnfriendUser = (id: string) => {
	const currentUserId = useCurrentUserCached()?._id as string;

	const queryClient = useQueryClient();

	const { mutate } = useMutateCustom({
		queryUrl: `users/me/friends/${id}`,
		method: "DELETE",
		onSuccessFn: () => {
			queryClient.setQueryData<IUser>(["currentUser"], (prevData) => {
				return prevData
					? {
							...prevData,
							friends: prevData.friends.filter((friend) => friend !== id),
					  }
					: prevData;
			});

			const allQueries = queryClient
				.getQueryCache()
				.findAll([currentUserId, "friends", "all"]);

			for (const query of allQueries) {
				queryClient.setQueryData<InfiniteData<IUser[]>>(query.queryKey, (prevData) => {
					return prevData
						? {
								pageParams: prevData.pageParams,
								pages: prevData.pages.map((page) => {
									return page.filter((user) => user._id !== id);
								}),
						  }
						: prevData;
				});
			}
		},
	});

	return () => mutate({});
};

export default useUnfriendUser;
