import { InfiniteData, useQueryClient } from "@tanstack/react-query";

import useMutateCustom from "@/hooks/reactQuery/useMutateCustom";
import { IUser } from "@/types/IUser";
import useCurrentUserCached from "@/hooks/auth/useCurrentUserCached";
import { useParams } from "react-router";

const rejectFriendCurrentUser = (prevData: IUser | undefined, newFriendId: string) => {
	return prevData
		? {
				...prevData,
				friendRequestsReceived: prevData.friendRequestsReceived.filter(
					(friendRequestId) => friendRequestId !== newFriendId,
				),
		  }
		: prevData;
};

const rejectFriendStatus = (
	prevData: InfiniteData<IUser[]> | undefined,
	newFriendId: string,
) => {
	return prevData
		? {
				...prevData,
				pages: prevData.pages.map((page) => {
					return page.map((user) =>
						user._id === newFriendId
							? {
									...user,
									status: "request declined" as const,
							  }
							: user,
					);
				}),
		  }
		: prevData;
};

const useRejectFriendRequest = (id: string) => {
	const currentUserId = useCurrentUserCached()?._id as string;
	const userPageId = useParams<{ id?: string }>()?.id;

	const queryClient = useQueryClient();

	const { mutate: reject } = useMutateCustom({
		queryUrl: `users/me/friend-requests/${id}/reject`,
		method: "DELETE",
		onSuccessFn: () => {
			queryClient.setQueryData<IUser>(["currentUser"], (prevData) =>
				rejectFriendCurrentUser(prevData, id),
			);

			queryClient.setQueryData<InfiniteData<IUser[]>>(
				[currentUserId, "friends", "suggestions"],
				(prevData) => rejectFriendStatus(prevData, id),
			);

			queryClient.setQueryData<InfiniteData<IUser[]>>(
				[currentUserId, "friends", "requests"],
				(prevData) => rejectFriendStatus(prevData, id),
			);

			if (userPageId) {
				const allUserFriendsQueries = queryClient
					.getQueryCache()
					.findAll(["user", userPageId, "friends"]);

				for (const query of allUserFriendsQueries) {
					queryClient.setQueryData<InfiniteData<IUser[]>>(query.queryKey, (prevData) =>
						rejectFriendStatus(prevData, id),
					);
				}
			}
		},
	});
	return () => reject({});
};

export default useRejectFriendRequest;
