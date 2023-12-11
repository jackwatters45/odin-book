import { InfiniteData, useQueryClient } from "@tanstack/react-query";

import useMutateCustom from "@/hooks/reactQuery/useMutateCustom";
import { IUser } from "@/types/IUser";
import useCurrentUserCached from "@/hooks/auth/useCurrentUserCached";

const rejectFriendCachedUser = (
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

	const queryClient = useQueryClient();

	const { mutate: reject } = useMutateCustom({
		queryUrl: `users/me/friend-requests/${id}/reject`,
		method: "DELETE",
		onSuccessFn: () => {
			queryClient.setQueryData<IUser>(["currentUser"], (prevData) => {
				return prevData
					? {
							...prevData,
							friendRequestsReceived: prevData.friendRequestsReceived.filter(
								(friendRequestId) => friendRequestId !== id,
							),
					  }
					: prevData;
			});

			queryClient.setQueryData<InfiniteData<IUser[]>>(
				[currentUserId, "friends", "suggestions"],
				(prevData) => rejectFriendCachedUser(prevData, id),
			);

			queryClient.setQueryData<InfiniteData<IUser[]>>(
				[currentUserId, "friends", "requests"],
				(prevData) => rejectFriendCachedUser(prevData, id),
			);
		},
	});
	return () => reject({});
};

export default useRejectFriendRequest;
