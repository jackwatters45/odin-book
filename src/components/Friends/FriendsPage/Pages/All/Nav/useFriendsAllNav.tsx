import { apiBaseUrl } from "@/config/envVariables";
import useCurrentUserCached from "@/hooks/useCurrentUserCached";
import useInfiniteScroll from "@/hooks/useInfiniteScroll";
import { UserPreviewWithMutuals } from "@/types/UserPreviewWithMutuals";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";

const ITEMS_PER_PAGE = 12;

interface FetchFriendsAllArgs {
	pageParam: number;
	q: string;
}
const fetchFriendsAll = async ({ q, pageParam = 0 }: FetchFriendsAllArgs) => {
	const res = await fetch(`${apiBaseUrl}/users/search/friends?page=${pageParam}&q=${q}`, {
		method: "GET",
		credentials: "include",
	});

	if (!res.ok) throw new Error((await res.json()).message);
	return await res.json();
};

const useFriendsAllNav = () => {
	const currentUser = useCurrentUserCached();

	// input
	const { register, watch } = useForm();

	const q = watch("friends-all-nav-search");

	// infinite scroll query
	const {
		data: usersUnflattened,
		isLoading,
		fetchNextPage,
		isFetchingNextPage,
		hasNextPage,
	} = useInfiniteQuery<UserPreviewWithMutuals[]>({
		queryKey: [currentUser?._id as string, "friends", "all", q],
		queryFn: ({ pageParam }) => fetchFriendsAll({ pageParam, q }),
		getNextPageParam: (lastPage, pages) =>
			lastPage.length < ITEMS_PER_PAGE ? undefined : pages.length,
	});

	// infinite scroll ui
	const { ref } = useInfiniteScroll<UserPreviewWithMutuals[]>({
		data: usersUnflattened,
		hasNextPage,
		fetchNextPage,
	});

	const users = usersUnflattened?.pages.flat() as UserPreviewWithMutuals[];

	return { users, isLoading, ref, isFetchingNextPage, hasNextPage, register, q };
};

export default useFriendsAllNav;
