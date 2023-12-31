import { useInfiniteQuery } from "@tanstack/react-query";

import useCurrentUserCached from "@/hooks/auth/useCurrentUserCached";
import { apiBaseUrl } from "@/config/envVariables";
import useInfiniteScroll from "@/hooks/dom/useInfiniteScroll";
import { UserPreviewWithMutuals } from "@/types/UserPreviewWithMutuals";
import { useMemo } from "react";

const ITEMS_PER_PAGE = 12;

const fetchFriendsRequests = async ({ pageParam = 0 }) => {
	const res = await fetch(`${apiBaseUrl}/users/me/friend-requests?page=${pageParam}`, {
		method: "GET",
		credentials: "include",
	});

	if (!res.ok) throw new Error((await res.json()).message);
	return await res.json();
};

const useFriendsRequestsNav = () => {
	const currentUser = useCurrentUserCached();

	// infinite scroll query
	const {
		data: usersUnflattened,
		isLoading,
		fetchNextPage,
		isFetchingNextPage,
		hasNextPage,
	} = useInfiniteQuery<UserPreviewWithMutuals[]>({
		queryKey: [currentUser?._id as string, "friends", "requests"],
		queryFn: ({ pageParam }) => fetchFriendsRequests({ pageParam }),
		getNextPageParam: (lastPage, pages) =>
			lastPage.length < ITEMS_PER_PAGE ? undefined : pages.length,
	});

	// infinite scroll ui
	const { ref } = useInfiniteScroll<UserPreviewWithMutuals[]>({
		data: usersUnflattened,
		hasNextPage,
		fetchNextPage,
	});

	const users = useMemo(() => {
		return usersUnflattened?.pages?.flat() ?? [];
	}, [usersUnflattened]);

	const requestsCount = currentUser?.friendRequestsReceived.length ?? 0;

	return { users, isLoading, ref, isFetchingNextPage, hasNextPage, requestsCount };
};

export default useFriendsRequestsNav;
