import { apiBaseUrl } from "@/config/envVariables";
import { IComment } from "@/types/IComment";
import { IPost } from "@/types/IPost";
import { useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router";

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
		queryClient.setQueryData<IPost[]>(["user", userId, "posts"], (prevData) =>
			prevData?.map((prev) => {
				return prev._id === postId
					? { ...prev, comments: [data, ...(prev.comments || [])] }
					: prev;
			}),
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
