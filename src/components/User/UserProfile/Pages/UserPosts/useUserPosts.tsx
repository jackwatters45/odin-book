import { useOutletContext, useParams } from "react-router";
import { useEffect, useMemo, useRef, useState } from "react";

import { IPost } from "@/types/IPost";
import { IUser } from "@/types/IUser";
import useCurrentUserCached from "@/hooks/auth/useCurrentUserCached";
import useInfiniteScroll from "@/hooks/dom/useInfiniteScroll";
import { useInfiniteQuery } from "@tanstack/react-query";
import { apiBaseUrl } from "@/config/envVariables";
import useContainerWidth from "../../context/useContainerWidth";
import useWindowWidth from "@/hooks/dom/useWindowWidth";

const ITEMS_PER_PAGE = 20;

interface FetchPostsParams {
	userId: string;
	pageParam?: number;
}

const fetchPosts = async ({ userId, pageParam = 0 }: FetchPostsParams) => {
	const res = await fetch(`${apiBaseUrl}/users/${userId}/posts?page=${pageParam}`, {
		method: "GET",
		credentials: "include",
	});

	if (!res.ok) throw new Error((await res.json()).message);
	return await res.json();
};

const useUserPosts = () => {
	const currentUserAvatar = useCurrentUserCached()?.avatarUrl;

	// container + window width
	const containerWidth = useContainerWidth();
	const windowWidth = useWindowWidth();

	const isPreview = windowWidth !== containerWidth;

	// user who's profile is being viewed
	const { user } = useOutletContext<{ user: IUser }>();

	// user posts
	const { id: userId } = useParams<{ id: string }>() as { id: string };

	const {
		data: unflattenedPosts,
		isLoading,
		fetchNextPage,
		isFetchingNextPage,
		hasNextPage,
	} = useInfiniteQuery<IPost[]>({
		queryKey: ["user", userId, "posts"],
		queryFn: ({ pageParam }) => fetchPosts({ userId, pageParam }),
		getNextPageParam: (lastPage, pages) =>
			lastPage.length < ITEMS_PER_PAGE ? undefined : pages.length,
	});

	const posts = useMemo(() => {
		return unflattenedPosts?.pages.flat() ?? [];
	}, [unflattenedPosts]);

	// infinite scroll ui
	const { ref } = useInfiniteScroll<IPost[]>({
		data: unflattenedPosts,
		hasNextPage,
		fetchNextPage,
	});

	// column scroll styles
	const [windowHeight, setWindowHeight] = useState(window.innerHeight);
	const handleResize = () => setWindowHeight(window.innerHeight);

	useEffect(() => {
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const leftSidebarRef = useRef<HTMLDivElement>(null);
	const getTop = () => {
		const leftColumnHeight = leftSidebarRef.current?.offsetHeight ?? windowHeight;

		const isColumnBiggerThanScreen = leftColumnHeight > windowHeight;

		if (isPreview) {
			return isColumnBiggerThanScreen
				? `calc(${windowHeight - leftColumnHeight - 56}px)`
				: "1rem";
		} else {
			return isColumnBiggerThanScreen
				? `calc(${windowHeight - leftColumnHeight}px)`
				: "calc(1rem + 56px)";
		}
	};
	const top = getTop();

	return {
		currentUserAvatar,
		containerWidth,
		user,
		leftSidebarRef,
		top,
		posts,
		isLoading,
		ref,
		isFetchingNextPage,
		hasNextPage,
	};
};

export default useUserPosts;
