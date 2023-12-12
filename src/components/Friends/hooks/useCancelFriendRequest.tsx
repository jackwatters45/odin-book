import { InfiniteData, useQueryClient } from "@tanstack/react-query";

import useMutateCustom from "@/hooks/reactQuery/useMutateCustom";
import { IUser } from "@/types/IUser";
import useCurrentUserCached from "@/hooks/auth/useCurrentUserCached";
import { useParams } from "react-router";

const cancelFriendRequestCurrentUser = (
	prevData: IUser | undefined,
	userBeingUnrequestedId: string,
) => {
	return prevData
		? {
				...prevData,
				friendRequestsSent: prevData.friendRequestsSent.filter(
					(friendRequestId) => friendRequestId !== userBeingUnrequestedId,
				),
		  }
		: prevData;
};

const cancelFriendRequestStatus = (
	prevData: InfiniteData<IUser[]> | undefined,
	userRequestingId: string,
	userBeingUnrequestedId: string,
) => {
	return prevData
		? {
				...prevData,
				pages: prevData.pages.map((page) => {
					return page.map((user) =>
						user._id === userBeingUnrequestedId
							? {
									...user,
									friendRequestsReceived: user.friendRequestsReceived?.filter(
										(friendRequestId) => friendRequestId !== userRequestingId,
									),
									status: "non-friend" as const,
							  }
							: user,
					);
				}),
		  }
		: prevData;
};

const useCancelFriendRequest = (id: string) => {
	const currentUserId = useCurrentUserCached()?._id as string;
	const userPageId = useParams<{ id?: string }>()?.id;

	const queryClient = useQueryClient();

	const { mutate: cancel } = useMutateCustom({
		queryUrl: `users/me/friend-requests/${id}`,
		method: "DELETE",
		onSuccessFn: () => {
			queryClient.setQueryData<IUser>(["currentUser"], (prevData) =>
				cancelFriendRequestCurrentUser(prevData, id),
			);

			queryClient.setQueryData<InfiniteData<IUser[]>>(
				[currentUserId, "friends", "suggestions"],
				(prevData) => cancelFriendRequestStatus(prevData, currentUserId, id),
			);

			if (userPageId) {
				const allUserFriendsQueries = queryClient
					.getQueryCache()
					.findAll(["user", userPageId, "friends"]);

				for (const query of allUserFriendsQueries) {
					queryClient.setQueryData<InfiniteData<IUser[]>>(
						query.queryKey,

						(prevData) => cancelFriendRequestStatus(prevData, currentUserId, id),
					);
				}
			}
		},
	});
	return () => cancel({});
};

export default useCancelFriendRequest;
