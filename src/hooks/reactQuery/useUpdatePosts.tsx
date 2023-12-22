import { InfiniteData, useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router";

import { IPost } from "@/types/IPost";
import useCurrentUserCached from "../auth/useCurrentUserCached";

type InfinitePostsResults = InfiniteData<IPost[]>;

const updatePostData = (
	data: IPost,
	fieldsToUpdate: Partial<IPost> | undefined,
	prevData: InfinitePostsResults | undefined,
) => {
	if (!prevData) return prevData;

	const updatedPages = prevData.pages.map((page) =>
		page.map((p) => {
			return p._id === data._id ? { ...p, ...(fieldsToUpdate || data) } : p;
		}),
	);

	return {
		pages: updatedPages,
		pageParams: prevData.pageParams,
	};
};

const useUpdatePosts = () => {
	const { id: userId } = useParams<{ id: string }>() as { id: string };
	const currentUser = useCurrentUserCached();

	const queryClient = useQueryClient();

	const updatePosts = (data: IPost, fieldsToUpdate: Partial<IPost> | undefined) => {
		queryClient.setQueryData<IPost>(["post", data._id], (prevData) =>
			prevData ? { ...prevData, ...(fieldsToUpdate || data) } : prevData,
		);

		queryClient.setQueryData<InfinitePostsResults>(
			["posts", currentUser?._id],
			(prevData) => {
				console.log(data, fieldsToUpdate, prevData);
				return updatePostData(data, fieldsToUpdate, prevData);
			},
		);

		queryClient.setQueryData<InfinitePostsResults>(
			["user", userId, "posts"],
			(prevData) => updatePostData(data, fieldsToUpdate, prevData),
		);
	};

	return updatePosts;
};

export default useUpdatePosts;
