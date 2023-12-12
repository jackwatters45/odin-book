import { useMemo } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";

import { apiBaseUrl } from "@/config/envVariables";
import useCurrentUserCached from "@/hooks/auth/useCurrentUserCached";
import useInfiniteScroll from "@/hooks/dom/useInfiniteScroll";
import { IPost } from "@/types/IPost";

const ITEMS_PER_PAGE = 10;

const fetchPosts = async ({ pageParam = 0 }) => {
	const res = await fetch(`${apiBaseUrl}/posts/friends?page=${pageParam}`, {
		method: "GET",
		credentials: "include",
	});

	if (!res.ok) throw new Error((await res.json()).message);
	return await res.json();
};

const useDashboard = () => {
	const currentUser = useCurrentUserCached();

	// infinite scroll query
	const {
		data: unflattenedPosts,
		isLoading,
		fetchNextPage,
		isFetchingNextPage,
		hasNextPage,
	} = useInfiniteQuery<IPost[]>({
		queryKey: ["posts", currentUser?._id as string],
		queryFn: ({ pageParam }) => fetchPosts({ pageParam }),
		getNextPageParam: (lastPage, pages) =>
			lastPage.length < ITEMS_PER_PAGE ? undefined : pages.length,
	});

	// infinite scroll ui
	const { ref } = useInfiniteScroll<IPost[]>({
		data: unflattenedPosts,
		hasNextPage,
		fetchNextPage,
	});

	const posts = useMemo(() => {
		return unflattenedPosts?.pages.flat() ?? [];
	}, [unflattenedPosts]);

	return { currentUser, posts, isLoading, ref, isFetchingNextPage, hasNextPage };
};

export default useDashboard;
