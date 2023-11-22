import { apiBaseUrl } from "@/config/envVariables";
import useCurrentUserCached from "@/hooks/useCurrentUserCached";
import useInfiniteScroll from "@/hooks/useInfiniteScroll";
import { IPost } from "@/types/IPost";
import { useInfiniteQuery } from "@tanstack/react-query";

const ITEMS_PER_PAGE = 20;

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
		data: posts,
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
		data: posts,
		hasNextPage,
		fetchNextPage,
	});

	return { currentUser, posts, isLoading, ref, isFetchingNextPage, hasNextPage };
};

export default useDashboard;
