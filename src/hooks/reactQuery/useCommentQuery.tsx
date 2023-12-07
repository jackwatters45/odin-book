import { InfiniteData, useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router";

import { apiBaseUrl } from "@/config/envVariables";
import { IComment } from "@/types/IComment";
import { IPost } from "@/types/IPost";
import useCurrentUserCached from "../auth/useCurrentUserCached";

type InfinitePostsResults = InfiniteData<IPost[]>;

const updatePostsComments = (
	data: IComment,
	prevData: InfinitePostsResults | undefined,
) => {
	if (!prevData) return prevData;
	const updatedPages = prevData.pages.map((page) =>
		page.map((p) => {
			return p._id === data.post ? { ...p, comments: [...(p.comments || []), data] } : p;
		}),
	) as IPost[][];

	return {
		pages: updatedPages,
		pageParams: prevData.pageParams,
	};
};

export const useCommentQuery = (postId: string) => {
	const { id: userId } = useParams<{ id: string }>() as { id: string };
	const currentUser = useCurrentUserCached();

	const queryClient = useQueryClient();

	// fetch replies
	const fetchReplies = async (postId: string, commentId: string) => {
		const res = await fetch(
			`${apiBaseUrl}/posts/${postId}/comments/${commentId}/replies`,
			{
				method: "GET",
				credentials: "include",
			},
		);

		if (!res.ok) throw new Error((await res.json()).message);
		return await res.json();
	};

	// create comment on success
	const createCommentQuery = (data: IComment) => {
		queryClient.setQueryData<InfinitePostsResults>(
			["posts", currentUser?._id],
			(prevData) => updatePostsComments(data, prevData),
		);

		queryClient.setQueryData<InfinitePostsResults>(
			["user", userId, "posts"],
			(prevData) => updatePostsComments(data, prevData),
		);

		queryClient.setQueryData<IPost>(["post", postId], (prevData) => {
			if (!prevData) return prevData;
			return (
				{
					...prevData,
					comments: [data, ...(prevData?.comments || [])],
				} ?? []
			);
		});

		return data.parentComment
			? queryClient.setQueryData<IComment[]>(
					["post", postId, "comment", data.parentComment, "replies"],
					(prevData) => [data, ...(prevData || [])],
			  )
			: queryClient.setQueryData<IComment[]>(["post", postId, "comments"], (prevData) => [
					data,
					...(prevData || []),
			  ]);
	};

	// edit comment on success
	const editCommentQuery = (data: IComment) => {
		return data.parentComment
			? queryClient.setQueryData<IComment[]>(
					["post", postId, "comment", data.parentComment, "replies"],
					(prevData) =>
						prevData?.map((prev) =>
							prev._id === data._id ? { ...prev, ...data } : prev,
						),
			  )
			: queryClient.setQueryData<IComment[]>(["post", postId, "comments"], (prevData) =>
					prevData?.map((prev) => (prev._id === data._id ? { ...prev, ...data } : prev)),
			  );
	};

	return { fetchReplies, createCommentQuery, editCommentQuery };
};

export default useCommentQuery;
