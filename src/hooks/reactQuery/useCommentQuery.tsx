import { apiBaseUrl } from "@/config/envVariables";
import { IComment } from "@/types/IComment";
import { IPost } from "@/types/IPost";
import { InfiniteData, useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router";

type InfinitePostsResults = InfiniteData<IPost[]>;

export const useCommentQuery = (postId: string) => {
	const queryClient = useQueryClient();

	const { id: userId } = useParams<{ id: string }>() as { id: string };

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
			["user", userId, "posts"],
			(prevData) => {
				if (!prevData) return prevData;
				const updatedPages = prevData.pages.map((page) =>
					page.map((p) => (p._id === data._id ? data : p)),
				) as IPost[][];

				return {
					pages: updatedPages,
					pageParams: prevData.pageParams,
				};
			},
		);

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
