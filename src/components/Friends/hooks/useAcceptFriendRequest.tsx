import { InfiniteData, useQueryClient } from "@tanstack/react-query";

import useMutateCustom from "@/hooks/reactQuery/useMutateCustom";
import { IUser } from "@/types/IUser";
import useCurrentUserCached from "@/hooks/auth/useCurrentUserCached";
import { useParams } from "react-router";

const acceptFriendCurrentUser = (prevData: IUser | undefined, userToAddId: string) => {
	return prevData
		? {
				...prevData,
				friends: prevData.friends ? [...prevData.friends, userToAddId] : [userToAddId],
				friendRequestsReceived: prevData.friendRequestsReceived.filter(
					(friendRequestId) => friendRequestId !== userToAddId,
				),
		  }
		: prevData;
};

const acceptFriendStatus = (
	prevData: InfiniteData<IUser[]> | undefined,
	userToAddId: string,
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
									friends: user.friends ? [...user.friends, userToAddId] : [userToAddId],
									status: "request accepted" as const,
							  }
							: user,
					);
				}),
		  }
		: prevData;
};

const useAcceptFriendRequest = (id: string) => {
	const currentUserId = useCurrentUserCached()?._id as string;
	const userPageId = useParams<{ id?: string }>()?.id;

	const queryClient = useQueryClient();

	const { mutate: accept } = useMutateCustom({
		queryUrl: `users/me/friend-requests/${id}/accept`,
		method: "POST",
		onSuccessFn: () => {
			queryClient.setQueryData<IUser>(["currentUser"], (prevData) =>
				acceptFriendCurrentUser(prevData, id),
			);

			queryClient.setQueryData<InfiniteData<IUser[]>>(
				[currentUserId, "friends", "suggestions"],
				(prevData) => acceptFriendStatus(prevData, currentUserId, id),
			);

			queryClient.setQueryData<InfiniteData<IUser[]>>(
				[currentUserId, "friends", "requests"],
				(prevData) => acceptFriendStatus(prevData, currentUserId, id),
			);

			if (userPageId) {
				const allUserFriendsQueries = queryClient
					.getQueryCache()
					.findAll(["user", userPageId, "friends"]);

				for (const query of allUserFriendsQueries) {
					queryClient.setQueryData<InfiniteData<IUser[]>>(query.queryKey, (prevData) =>
						acceptFriendStatus(prevData, currentUserId, id),
					);
				}
			}
		},
	});

	return () => accept({});
};

export default useAcceptFriendRequest;
