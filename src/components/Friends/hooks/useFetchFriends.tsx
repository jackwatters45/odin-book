import { useParams } from "react-router";
import { useInfiniteQuery } from "@tanstack/react-query";
import { apiBaseUrl } from "@/config/envVariables";
import useInfiniteScroll from "@/hooks/dom/useInfiniteScroll";
import { FriendsQueryEndType, IFriendListDisplayFields } from "../types/FriendsTypes";
import { useMemo } from "react";

interface IFetchFriends {
	queryEnd: FriendsQueryEndType;
	userId: string;
	limit?: number;
	pageParam?: number;
}

const DEFAULT_ITEMS_PER_PAGE = 12;

const fetchFriends = async ({
	queryEnd,
	userId,
	limit = DEFAULT_ITEMS_PER_PAGE,
	pageParam = 0,
}: IFetchFriends) => {
	const res = await fetch(
		`${apiBaseUrl}/users/${userId}/friends/${queryEnd}/?page=${pageParam}
		${limit ? `&limit=${limit}` : ""}`,
		{
			method: "GET",
			credentials: "include",
			headers: { "Content-Type": "application/json" },
		},
	);

	if (!res.ok) throw new Error("Error fetching friends");
	return await res.json();
};

interface UseFetchFriendsProps {
	queryEnd?: FriendsQueryEndType;
	limit?: number;
}

const useFetchFriends = ({ queryEnd = "all", limit }: UseFetchFriendsProps = {}) => {
	const { id: userId } = useParams<{ id: string }>() as { id: string };

	const {
		data: unflattenedFriends,
		isLoading,
		fetchNextPage,
		isFetchingNextPage,
		hasNextPage,
	} = useInfiniteQuery<IFriendListDisplayFields[]>({
		queryKey: ["user", userId, "friends", queryEnd, limit],
		queryFn: ({ pageParam }) => fetchFriends({ queryEnd, userId, limit, pageParam }),
		getNextPageParam: (lastPage, pages) => {
			return lastPage?.length < DEFAULT_ITEMS_PER_PAGE ? undefined : pages?.length;
		},
	});

	const friends = useMemo(() => {
		return unflattenedFriends?.pages.flat() ?? [];
	}, [unflattenedFriends]);

	const { ref } = useInfiniteScroll<IFriendListDisplayFields[]>({
		data: unflattenedFriends,
		hasNextPage,
		fetchNextPage,
	});

	return {
		friends,
		userId,
		isLoading,
		ref,
		isFetchingNextPage,
		hasNextPage,
	};
};

export default useFetchFriends;
