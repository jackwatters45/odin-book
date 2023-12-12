import { InfiniteData, useQueryClient } from "@tanstack/react-query";

import useMutateCustom from "@/hooks/reactQuery/useMutateCustom";
import { IUser } from "@/types/IUser";
import useCurrentUserCached from "@/hooks/auth/useCurrentUserCached";
import { useParams } from "react-router";

const sendFriendRequestCurrentUser = (
	prevData: IUser | undefined,
	userBeingRequestedId: string,
) => {
	return prevData
		? {
				...prevData,
				friendRequestsSent: prevData.friendRequestsSent
					? [...prevData.friendRequestsSent, userBeingRequestedId]
					: [userBeingRequestedId],
		  }
		: prevData;
};

const sendFriendRequestStatus = (
	prevData: InfiniteData<IUser[]> | undefined,
	userRequestingId: string,
	userBeingRequestedId: string,
) => {
	return prevData
		? {
				...prevData,
				pages: prevData.pages.map((page) => {
					return page.map((user) => {
						return user._id === userBeingRequestedId
							? {
									...user,
									friendRequestsReceived: user.friendRequestsReceived
										? [...user.friendRequestsReceived, userRequestingId]
										: [userRequestingId],
									status: "request sent" as const,
							  }
							: user;
					});
				}),
		  }
		: prevData;
};

const useSendFriendRequest = (id: string) => {
	const currentUserId = useCurrentUserCached()?._id as string;
	const userPageId = useParams<{ id?: string }>()?.id;

	const queryClient = useQueryClient();

	const { mutate } = useMutateCustom({
		queryUrl: `users/me/friend-requests/${id}`,
		method: "POST",
		onSuccessFn: () => {
			queryClient.setQueryData<IUser>(["currentUser"], (prevData) =>
				sendFriendRequestCurrentUser(prevData, id),
			);

			queryClient.setQueryData<InfiniteData<IUser[]>>(
				[currentUserId, "friends", "suggestions"],
				(prevData) => sendFriendRequestStatus(prevData, currentUserId, id),
			);

			if (userPageId) {
				const allUserFriendsQueries = queryClient
					.getQueryCache()
					.findAll(["user", userPageId, "friends"]);

				for (const query of allUserFriendsQueries) {
					queryClient.setQueryData<InfiniteData<IUser[]>>(query.queryKey, (prevData) =>
						sendFriendRequestStatus(prevData, currentUserId, id),
					);
				}
			}
		},
	});

	return () => mutate({});
};

export default useSendFriendRequest;
