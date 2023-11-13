import { FriendPreview } from "@/components/Friends/types/FriendsTypes";
import { apiBaseUrl } from "@/config/envVariables";
import useCurrentUserCached from "@/hooks/useCurrentUserCached";
import useInfiniteScroll from "@/hooks/useInfiniteScroll";
import { useInfiniteQuery } from "@tanstack/react-query";

const ITEMS_PER_PAGE = 12;

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

	// infinite scroll query
	const {
		data: usersUnflattened,
		isLoading,
		fetchNextPage,
		isFetchingNextPage,
		hasNextPage,
	} = useInfiniteQuery<FriendPreview[]>({
		queryKey: [currentUser?._id as string, "friends", "suggestions"],
		queryFn: ({ pageParam }) => fetchFriendsSuggestions({ pageParam }),
		getNextPageParam: (lastPage, pages) =>
			lastPage.length < ITEMS_PER_PAGE ? undefined : pages.length,
	});

	// infinite scroll ui
	const { ref } = useInfiniteScroll<FriendPreview[]>({
		data: usersUnflattened,
		hasNextPage,
		fetchNextPage,
	});

	const users = usersUnflattened?.pages.flat() as FriendPreview[];

	return { users, isLoading, ref, isFetchingNextPage, hasNextPage };
};

export default useFriendsHomeSuggestions;
