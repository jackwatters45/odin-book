import { InfiniteData, useQueryClient } from "@tanstack/react-query";

import useMutateCustom from "@/hooks/reactQuery/useMutateCustom";
import { IUser } from "@/types/IUser";
import useCurrentUserCached from "@/hooks/auth/useCurrentUserCached";

const useCancelFriendRequest = (id: string) => {
	const currentUserId = useCurrentUserCached()?._id as string;

	const queryClient = useQueryClient();

	const { mutate: cancel } = useMutateCustom({
		queryUrl: `users/me/friend-requests/${id}`,
		method: "DELETE",
		onSuccessFn: () => {
			queryClient.setQueryData<IUser>(["currentUser"], (prevData) => {
				return prevData
					? {
							...prevData,
							friendRequestsSent: prevData.friendRequestsSent.filter(
								(friendRequestId) => friendRequestId !== id,
							),
					  }
					: prevData;
			});

			queryClient.setQueryData<InfiniteData<IUser[]>>(
				[currentUserId, "friends", "suggestions"],
				(prevData) => {
					return prevData
						? {
								...prevData,
								pages: prevData.pages.map((page) => {
									return page.map((user) =>
										user._id === id
											? {
													...user,
													friendRequestsReceived: user.friendRequestsReceived.filter(
														(friendRequestId) => friendRequestId !== currentUserId,
													),
													status: "non-friend",
											  }
											: user,
									);
								}),
						  }
						: prevData;
				},
			);
		},
	});
	return () => cancel({});
};

export default useCancelFriendRequest;
