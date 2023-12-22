import { useParams } from "react-router";
import { InfiniteData, useQueryClient } from "@tanstack/react-query";

import { IComment } from "@/types/IComment";
import { IPost } from "@/types/IPost";

type InfinitePostsResults = InfiniteData<IPost[]>;

const updatePostComments = (prevData: IComment[] | undefined, updatedComment: IComment) =>
	prevData
		? prevData.map((c) => {
				return c._id === updatedComment._id ? updatedComment : c;
		  })
		: prevData;

const updatePosts = (
	postId: string,
	updatedComment: IComment,
	prevData: InfinitePostsResults | undefined,
) =>
	prevData
		? {
				pages: prevData.pages.map((page) =>
					page.map((p) =>
						p._id === postId
							? {
									...p,
									comments: p.comments.map((c) =>
										c._id === updatedComment._id ? updatedComment : c,
									),
							  }
							: p,
					),
				),
				pageParams: prevData.pageParams,
		  }
		: prevData;

const useUpdateComment = () => {
	const { id: userId } = useParams<{ id: string }>() as { id: string };

	const queryClient = useQueryClient();

	const updateComment = (postId: string, updatedComment: IComment) => {
		console.log(updatedComment.parentComment);
		if (updatedComment.parentComment) {
			queryClient.setQueryData<IComment[]>(
				["post", postId, "comment", updatedComment.parentComment, "replies"],
				(prevData) => updatePostComments(prevData, updatedComment),
			);
			return;
		}

		queryClient.setQueryData<IComment[]>(["post", postId, "comments"], (prevData) =>
			updatePostComments(prevData, updatedComment),
		);

		queryClient.setQueryData<InfinitePostsResults>(
			["user", userId, "posts"],
			(prevData) => updatePosts(postId, updatedComment, prevData),
		);
	};

	return updateComment;
};

export default useUpdateComment;
