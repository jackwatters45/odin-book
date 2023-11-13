import { useOutletContext, useParams } from "react-router";
import { useEffect, useRef, useState } from "react";

import useQueryCustom from "@/hooks/reactQuery/useQueryCustom";
import { IPost } from "@/types/IPost";
import { IUser } from "@/types/IUser";
import useCurrentUserCached from "@/hooks/useCurrentUserCached";

type JsonResponse = { posts: IPost[] };
type FnReturnType = IPost[] | null;

const useUserPosts = () => {
	const currentUserAvatar = useCurrentUserCached()?.avatarUrl;

	// user who's profile is being viewed
	const { user } = useOutletContext<{ user: IUser }>();

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

		return isColumnBiggerThanScreen
			? `calc(${windowHeight - leftColumnHeight}px)`
			: "calc(1rem + 56px)";
	};
	const top = getTop();

	// user posts
	const { id: userId } = useParams<{ id: string }>() as { id: string };

	const { data: posts, isLoading } = useQueryCustom<JsonResponse, FnReturnType>({
		queryUrl: `users/${userId}/posts`,
		queryKey: ["user", userId, "posts"],
		transformData: (data) => data.posts,
	});

	return { currentUserAvatar, user, leftSidebarRef, top, posts, isLoading };
};

export default useUserPosts;
