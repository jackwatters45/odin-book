import { InfiniteData, useQueryClient } from "@tanstack/react-query";

import useMutateCustom from "@/hooks/reactQuery/useMutateCustom";
import { IUser } from "@/types/IUser";
import useCurrentUserCached from "@/hooks/auth/useCurrentUserCached";

const useSendFriendRequest = (id: string) => {
	const currentUserId = useCurrentUserCached()?._id as string;

	const queryClient = useQueryClient();

	const { mutate } = useMutateCustom({
		queryUrl: `users/me/friend-requests/${id}`,
		method: "POST",
		onSuccessFn: () => {
			queryClient.setQueryData<IUser>(["currentUser"], (prevData) => {
				return prevData
					? {
							...prevData,
							friendRequestsSent: prevData.friendRequestsSent
								? [...prevData.friendRequestsSent, id]
								: [id],
					  }
					: prevData;
			});

			queryClient.setQueryData<InfiniteData<IUser[]>>(
				[currentUserId, "friends", "suggestions"],
				(prevData) => {
					return prevData
						? {
								...prevData,
								pages: prevData.pages.map((page) =>
									page.map((user) =>
										user._id === id
											? {
													...user,
													friendRequestsReceived: user.friendRequestsReceived
														? [...user.friendRequestsReceived, currentUserId]
														: [currentUserId],
													status: "request sent",
											  }
											: user,
									),
								),
						  }
						: prevData;
				},
			);
		},
	});

	return () => mutate({});
};

export default useSendFriendRequest;
