import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

import { apiBaseUrl } from "@/config/envVariables";
import useCurrentUserCached from "@/hooks/auth/useCurrentUserCached";
import { UserPreviewWithMutuals } from "@/types/UserPreviewWithMutuals";

const DEFAULT_ITEMS_PER_PAGE = 16;

const fetchFriendRequests = async (limit: number) => {
	const res = await fetch(`${apiBaseUrl}/users/me/friend-requests?limit=${limit}`, {
		method: "GET",
		credentials: "include",
	});

	if (!res.ok) throw new Error((await res.json()).message);
	return await res.json();
};

const useFriendsHomeRequests = () => {
	const currentUser = useCurrentUserCached();

	const friendRequestsCount = currentUser?.friendRequestsReceived.length ?? 0;

	// responsive num of items to show
	const [itemsPerRow, setItemsPerRow] = useState(DEFAULT_ITEMS_PER_PAGE / 2);
	const itemsToShow = itemsPerRow * 2;

	// View more
	const [isViewMore, setIsViewMore] = useState(false);
	const handleClickViewMore = () => setIsViewMore(true);

	// Fetch friend requests
	const { data: friendRequests, isLoading } = useQuery<UserPreviewWithMutuals[]>({
		queryKey: [currentUser?._id as string, "friends", "requests", friendRequestsCount],
		queryFn: () => fetchFriendRequests(friendRequestsCount),
	});

	// Slice friend requests
	const [users, setUsers] = useState<UserPreviewWithMutuals[]>([]);
	useEffect(() => {
		if (!friendRequests) return;
		setUsers(friendRequests.slice(0, isViewMore ? friendRequestsCount : itemsToShow));
	}, [friendRequests, friendRequestsCount, isViewMore, itemsToShow]);

	const showViewMore = friendRequestsCount > itemsToShow && !isViewMore;

	return {
		users,
		isLoading,
		isViewMore,
		showViewMore,
		handleClickViewMore,
		setItemsPerRow,
	};
};

export default useFriendsHomeRequests;
