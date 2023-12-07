import { useInfiniteQuery } from "@tanstack/react-query";
import { useState } from "react";

import { apiBaseUrl } from "@/config/envVariables";
import useCurrentUserCached from "@/hooks/auth/useCurrentUserCached";
import useInfiniteScroll from "@/hooks/dom/useInfiniteScroll";
import { UserPreviewWithMutuals } from "@/types/UserPreviewWithMutuals";

const DEFAULT_ITEMS_PER_PAGE = 16;

const fetchFriendsSuggestions = async ({ pageParam = 0 }) => {
	const res = await fetch(`${apiBaseUrl}/users/friends/suggestions?page=${pageParam}`, {
		method: "GET",
		credentials: "include",
	});

	if (!res.ok) throw new Error((await res.json()).message);
	return await res.json();
};

const useFriendsHomeSuggestions = () => {
	const currentUser = useCurrentUserCached();

	const [lastPageLength, setLastPageLength] = useState(0);

	// responsive num of items to show
	const [itemsPerRow, setItemsPerRow] = useState(DEFAULT_ITEMS_PER_PAGE / 2);

	// infinite scroll query
	const {
		data: usersUnflattened,
		isLoading,
		fetchNextPage,
		isFetchingNextPage,
		hasNextPage,
	} = useInfiniteQuery<UserPreviewWithMutuals[]>({
		queryKey: [currentUser?._id as string, "friends", "suggestions"],
		queryFn: ({ pageParam }) => fetchFriendsSuggestions({ pageParam }),
		getNextPageParam: (lastPage, pages) => {
			if (lastPage.length !== lastPageLength) setLastPageLength(lastPage.length);
			return lastPageLength < itemsPerRow * 2 ? undefined : pages.length;
		},
	});

	// infinite scroll ui
	const { ref } = useInfiniteScroll<UserPreviewWithMutuals[]>({
		data: usersUnflattened,
		hasNextPage,
		fetchNextPage,
	});

	const users = usersUnflattened?.pages.flat() as UserPreviewWithMutuals[];

	return { users, isLoading, ref, isFetchingNextPage, hasNextPage, setItemsPerRow };
};

export default useFriendsHomeSuggestions;
