import { InfiniteData, useQueryClient } from "@tanstack/react-query";

import useMutateCustom from "@/hooks/reactQuery/useMutateCustom";
import { IUser } from "@/types/IUser";
import useCurrentUserCached from "@/hooks/auth/useCurrentUserCached";
import { useParams } from "react-router";

const unfriendUserCurrentUser = (prevData: IUser | undefined, id: string) => {
	return prevData
		? {
				...prevData,
				friends: prevData.friends.filter((friend) => friend !== id),
				status: "non-friend" as const,
		  }
		: prevData;
};

const unfriendUserOtherUser = (prevData: IUser | undefined, currentUserId: string) => {
	return prevData
		? {
				...prevData,
				friends: prevData.friends.filter((friend) => friend !== currentUserId),
				status: "non-friend" as const,
		  }
		: prevData;
};

const unfriendUserUserProfile = (
	prevData: InfiniteData<IUser[]> | undefined,
	userUnfriendingId: string,
	userBeingUnfriendedId: string,
) => {
	return prevData
		? {
				...prevData,
				pages: prevData.pages.map((page) => {
					return page.map((user) =>
						user._id === userBeingUnfriendedId
							? {
									...user,
									friends: user.friends?.filter(
										(friendId) => friendId !== userUnfriendingId,
									),
									status: "non-friend" as const,
							  }
							: user,
					);
				}),
		  }
		: prevData;
};

const unfriendUserFriendsAll = (
	prevData: InfiniteData<IUser[]> | undefined,
	userUnfriendingId: string,
) => {
	return prevData
		? {
				...prevData,
				pages: prevData.pages.map((page) => {
					return page.filter((user) => user._id !== userUnfriendingId);
				}),
		  }
		: prevData;
};

const useUnfriendUser = (id: string) => {
	const currentUserId = useCurrentUserCached()?._id as string;
	const userPageId = useParams<{ id?: string }>()?.id;

	const queryClient = useQueryClient();

	const { mutate } = useMutateCustom({
		queryUrl: `users/me/friends/${id}`,
		method: "DELETE",
		onSuccessFn: () => {
			queryClient.setQueryData<IUser>(["currentUser"], (prevData) =>
				unfriendUserCurrentUser(prevData, id),
			);

			if (userPageId) {
				queryClient.setQueryData<IUser>(["user", id], (prevData) =>
					unfriendUserOtherUser(prevData, currentUserId),
				);

				const allUserFriendsQueries = queryClient
					.getQueryCache()
					.findAll(["user", userPageId, "friends"]);

				for (const query of allUserFriendsQueries) {
					queryClient.setQueryData<InfiniteData<IUser[]>>(query.queryKey, (prevData) =>
						unfriendUserUserProfile(prevData, currentUserId, id),
					);
				}
			}

			queryClient.invalidateQueries(["user", currentUserId, "friends"]);

			const allCurrentUserFriendsQueries = queryClient
				.getQueryCache()
				.findAll([currentUserId, "friends", "all"]);

			for (const query of allCurrentUserFriendsQueries) {
				queryClient.setQueryData<InfiniteData<IUser[]>>(query.queryKey, (prevData) =>
					unfriendUserFriendsAll(prevData, id),
				);
			}
		},
	});

	return () => mutate({});
};

export default useUnfriendUser;
