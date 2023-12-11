import { useInfiniteQuery } from "@tanstack/react-query";
import { useState } from "react";

import { apiBaseUrl } from "@/config/envVariables";
import useCurrentUserCached from "@/hooks/auth/useCurrentUserCached";
import { UserPreviewWithMutuals } from "@/types/UserPreviewWithMutuals";
import useInfiniteScroll from "@/hooks/dom/useInfiniteScroll";

const DEFAULT_ITEMS_PER_PAGE = 16;

const fetchFriendsRequests = async ({ pageParam = 0 }) => {
	const res = await fetch(`${apiBaseUrl}/users/me/friend-requests?page=${pageParam}`, {
		method: "GET",
		credentials: "include",
	});

	if (!res.ok) throw new Error((await res.json()).message);
	return await res.json();
};

const useFriendsHomeRequests = () => {
	const currentUser = useCurrentUserCached();

	const currentUserId = currentUser?._id as string;
	const friendRequestsCount = currentUser?.friendRequestsReceived.length ?? 0;

	// responsive num of items to show
	const [itemsPerRow, setItemsPerRow] = useState(DEFAULT_ITEMS_PER_PAGE / 2);
	const itemsToShow = itemsPerRow * 2;

	const [lastPageLength, setLastPageLength] = useState(0);

	// Fetch friend requests
	const {
		data: usersUnflattened,
		isLoading,
		fetchNextPage,
		isFetchingNextPage,
		hasNextPage,
	} = useInfiniteQuery<UserPreviewWithMutuals[]>({
		queryKey: [currentUserId, "friends", "requests"],
		queryFn: ({ pageParam }) => fetchFriendsRequests({ pageParam }),
		getNextPageParam: (lastPage, pages) => {
			if (lastPage.length !== lastPageLength) setLastPageLength(lastPage.length);
			return lastPageLength < itemsPerRow * 2 ? undefined : pages.length;
		},
	});

	const users = usersUnflattened?.pages?.flat() ?? [];

	// infinite scroll ui
	const { ref, triggerLoadMore } = useInfiniteScroll<UserPreviewWithMutuals[]>({
		data: usersUnflattened,
		hasNextPage,
		fetchNextPage,
	});

	// View more
	const [isViewMore, setIsViewMore] = useState(false);
	const handleClickViewMore = () => {
		setIsViewMore(true);
		triggerLoadMore();
	};

	// Slice friend requests
	// const [users, setUsers] = useState<UserPreviewWithMutuals[]>([]);
	// useEffect(() => {
	// 	if (!friendRequests) return;
	// 	setUsers(isViewMore ? friendRequests : friendRequests.slice(0, itemsToShow));
	// }, [friendRequests, friendRequestsCount, isViewMore, itemsToShow]);

	const showViewMore = friendRequestsCount > itemsToShow && !isViewMore;

	return {
		users,
		itemsToShow,
		ref,
		isFetchingNextPage,
		hasNextPage,
		isLoading,
		isViewMore,
		showViewMore,
		handleClickViewMore,
		setItemsPerRow,
	};
};

export default useFriendsHomeRequests;
