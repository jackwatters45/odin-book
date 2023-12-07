import { InfiniteData, useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router";

import { IPost } from "@/types/IPost";
import useCurrentUserCached from "@/hooks/auth/useCurrentUserCached";

type InfinitePostsResults = InfiniteData<IPost[]>;

const editPostQuery = (data: IPost, prevData: InfinitePostsResults | undefined) => {
	if (!prevData) return prevData;
	const updatedPages = prevData.pages.map((page) =>
		page.map((p) => (p._id === data._id ? data : p)),
	);

	return {
		pages: updatedPages,
		pageParams: prevData.pageParams,
	};
};

const addToPosts = (data: IPost, prevData: InfinitePostsResults | undefined) => {
	if (!prevData) return { pages: [[data]], pageParams: [{ 0: null }] };

	const updatedFirstPage = [data, ...prevData.pages[0]];
	const updatedPages = [updatedFirstPage, ...prevData.pages.slice(1)];

	return {
		pages: updatedPages,
		pageParams: prevData.pageParams,
	};
};

const addSharedPostToSharedPostCount = (
	data: IPost,
	prevData: InfinitePostsResults | undefined,
) => {
	if (!prevData) return prevData;
	const updatedPages = prevData.pages.map((page) =>
		page.map((p) => {
			return p._id === data.sharedFrom?._id ? { ...p, shareCount: p.shareCount + 1 } : p;
		}),
	);

	return {
		pages: updatedPages,
		pageParams: prevData.pageParams,
	};
};

const useCreatePostQuery = (type: "create" | "edit") => {
	const { id: userId } = useParams<{ id: string }>() as { id: string };

	const currentUserId = useCurrentUserCached()?._id;

	const queryClient = useQueryClient();

	return (data: IPost) => {
		if (type === "edit") {
			queryClient.setQueryData<InfinitePostsResults>(
				["user", userId, "posts"],
				(prevData) => editPostQuery(data, prevData),
			);
		} else {
			queryClient.setQueryData<InfinitePostsResults>(
				["user", userId, "posts"],
				(prevData) => addToPosts(data, prevData),
			);
		}

		const isSharedPost = !!data.sharedFrom;
		if (isSharedPost) {
			queryClient.setQueryData<IPost>(["post", data.sharedFrom?._id], (prevData) => {
				return prevData ? { ...prevData, shareCount: prevData.shareCount + 1 } : prevData;
			});

			queryClient.setQueryData<InfinitePostsResults>(
				["posts", currentUserId],
				(prevData) => addSharedPostToSharedPostCount(data, prevData),
			);
		}
	};
};

export default useCreatePostQuery;
