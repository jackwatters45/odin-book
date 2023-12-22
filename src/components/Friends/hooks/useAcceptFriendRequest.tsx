import { v4 as uuid } from "uuid";
import { InfiniteData, useQueryClient } from "@tanstack/react-query";

import useMutateCustom from "@/hooks/reactQuery/useMutateCustom";
import { IUser } from "@/types/IUser";
import useCurrentUserCached from "@/hooks/auth/useCurrentUserCached";
import { useParams } from "react-router";
import { INotification } from "@/components/Notifications/types/NotificationType";
import { UserPreview } from "@/types/IPost";

const acceptFriendCurrentUser = (prevData: IUser | undefined, userToAddId: string) => {
	return prevData
		? {
				...prevData,
				friends: prevData.friends ? [...prevData.friends, userToAddId] : [userToAddId],
				friendRequestsReceived: prevData.friendRequestsReceived.filter(
					(friendRequestId) => friendRequestId !== userToAddId,
				),
				status: "request accepted" as const,
		  }
		: prevData;
};

const acceptFriendOtherUser = (prevData: IUser | undefined, currentUserId: string) => {
	return prevData
		? {
				...prevData,
				friends: prevData.friends
					? [...prevData.friends, currentUserId]
					: [currentUserId],
				friendRequestsSent: prevData.friendRequestsSent.filter(
					(friendRequestId) => friendRequestId !== currentUserId,
				),
				status: "friend" as const,
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

const addNewAcceptedNotification = (
	prevData: InfiniteData<INotification[]> | undefined,
	acceptingUserId: string,
	requestingUser: UserPreview | undefined,
) => {
	return prevData && requestingUser
		? {
				...prevData,
				pages: [
					[
						{
							_id: uuid(),
							type: "request accepted" as const,
							to: acceptingUserId,
							from: [requestingUser],
							isRead: false,
							updatedAt: new Date().toISOString(),
							createdAt: new Date().toISOString(),
						},
						...prevData.pages[0],
					],
					...prevData.pages.slice(1),
				],
		  }
		: prevData;
};

const useAcceptFriendRequest = (id: string, requestingUser?: UserPreview) => {
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

			queryClient.setQueryData<InfiniteData<INotification[]>>(
				["me", "notifications", "all"],
				(prevData) => addNewAcceptedNotification(prevData, currentUserId, requestingUser),
			);

			queryClient.setQueryData<InfiniteData<INotification[]>>(
				["user", "notifications", "unread"],
				(prevData) => addNewAcceptedNotification(prevData, currentUserId, requestingUser),
			);

			if (userPageId) {
				queryClient.setQueryData<IUser>(["user", id], (prevData) =>
					acceptFriendOtherUser(prevData, currentUserId),
				);

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
