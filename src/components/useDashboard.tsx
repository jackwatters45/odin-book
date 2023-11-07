import { apiBaseUrl } from "@/config/envVariables";
import useCurrentUserCached from "@/hooks/useCurrentUserCached";
import { IPost } from "@/types/IPost";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useEffect, useRef, useState } from "react";

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

	// actual infinite scroll ui logic
	const ref = useRef<HTMLDivElement>(null);
	const [isLoadMore, setIsLoadMore] = useState(false);
	useEffect(() => {
		const currentRef = ref.current;

		if (posts?.pages && posts.pages.length > 0 && ref.current) {
			const observer = new IntersectionObserver((entries) => {
				const entry = entries[0];
				setIsLoadMore(entry.isIntersecting);
			});

			if (currentRef) observer.observe(currentRef);

			return () => {
				if (currentRef) observer.unobserve(currentRef);
			};
		}
	}, [posts?.pages]);

	useEffect(() => {
		if (!hasNextPage || !isLoadMore) return;
		fetchNextPage();
		setIsLoadMore(false);
	}, [isLoadMore, fetchNextPage, hasNextPage]);

	return { currentUser, posts, isLoading, ref, isFetchingNextPage, hasNextPage };
};

export default useDashboard;
