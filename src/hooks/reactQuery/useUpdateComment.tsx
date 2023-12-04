import { useParams } from "react-router";
import { InfiniteData, useQueryClient } from "@tanstack/react-query";

import { IComment } from "@/types/IComment";
import { IPost } from "@/types/IPost";

type InfinitePostsResults = InfiniteData<IPost[]>;

const useUpdateComment = () => {
	const { id: userId } = useParams<{ id: string }>() as { id: string };

	const queryClient = useQueryClient();

	const updateComment = (postId: string, updatedComment: IComment) => {
		const currentPost = queryClient.getQueryData(["post", postId]) as IPost;

		const updatedPost = {
			...currentPost,
			comments: currentPost.comments.map((c) =>
				c._id === updatedComment._id ? updatedComment : c,
			),
		};

		queryClient.setQueryData<InfinitePostsResults>(
			["user", userId, "posts"],
			(prevData) => {
				if (!prevData) return { pages: [[updatedPost]], pageParams: [{ 0: null }] };

				const updatedPages = prevData.pages.map((page) =>
					page.map((p) => (p._id === postId ? updatedPost : p)),
				);

				return {
					pages: updatedPages,
					pageParams: prevData.pageParams,
				};
			},
		);
		queryClient.setQueryData<IPost>(["post", postId], updatedPost);
	};

	return updateComment;
};

export default useUpdateComment;
