import { useParams } from "react-router";
import { useQueryClient } from "@tanstack/react-query";

import { IComment } from "@/types/IComment";
import { IPost } from "@/types/IPost";

const useUpdateComment = () => {
	const { id: userId } = useParams<{ id: string }>() as { id: string };

	const queryClient = useQueryClient();

	const updateComment = (postId: string, updatedComment: IComment) => {
		const currentPost = queryClient.getQueryData(["post", postId]) as IPost;

		const currentPosts =
			(queryClient.getQueryData(["user", userId, "posts"]) as IPost[]) || [];

		const postIndex = currentPosts.findIndex((p) => p._id === postId);
		if (postIndex !== -1) {
			const commentIndex = currentPost.comments.findIndex(
				(c) => c._id === updatedComment._id,
			);
			if (commentIndex !== -1) {
				const updatedPost = {
					...currentPost,
					comments: [
						...currentPost.comments.slice(0, commentIndex),
						updatedComment,
						...currentPost.comments.slice(commentIndex + 1),
					],
				};

				const updatedData = [
					...currentPosts.slice(0, postIndex),
					updatedPost,
					...currentPosts.slice(postIndex + 1),
				];

				queryClient.setQueryData(["user", userId, "posts"], updatedData);
				queryClient.setQueryData(["post", postId], updatedPost);
			}
		}
	};

	return updateComment;
};

export default useUpdateComment;
