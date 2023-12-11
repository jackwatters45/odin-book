import { InfiniteData, useQueryClient } from "@tanstack/react-query";

import useMutateCustom from "@/hooks/reactQuery/useMutateCustom";
import { IUser } from "@/types/IUser";
import useCurrentUserCached from "@/hooks/auth/useCurrentUserCached";

const addFriendToCachedUser = (
	prevData: InfiniteData<IUser[]> | undefined,
	currentUserId: string,
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
									friends: user.friends
										? [...user.friends, currentUserId]
										: [currentUserId],
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

	const queryClient = useQueryClient();

	const { mutate: accept } = useMutateCustom({
		queryUrl: `users/me/friend-requests/${id}/accept`,
		method: "POST",
		onSuccessFn: () => {
			queryClient.setQueryData<IUser>(["currentUser"], (prevData) => {
				return prevData
					? {
							...prevData,
							friends: prevData.friends ? [...prevData.friends, id] : [id],
							friendRequestsReceived: prevData.friendRequestsReceived.filter(
								(friendRequestId) => friendRequestId !== id,
							),
					  }
					: prevData;
			});

			queryClient.setQueryData<InfiniteData<IUser[]>>(
				[currentUserId, "friends", "suggestions"],
				(prevData) => addFriendToCachedUser(prevData, currentUserId, id),
			);

			queryClient.setQueryData<InfiniteData<IUser[]>>(
				[currentUserId, "friends", "requests"],
				(prevData) => addFriendToCachedUser(prevData, currentUserId, id),
			);
		},
	});

	return () => accept({});
};

export default useAcceptFriendRequest;
