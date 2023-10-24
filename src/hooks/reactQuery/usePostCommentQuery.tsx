import { useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router";

import { IPost } from "@/types/IPost";
import { IComment } from "@/types/IComment";

interface UsePostCommentQueryProps {
	postId: string;
}

const usePostCommentQuery = ({ postId }: UsePostCommentQueryProps) => {
	const queryClient = useQueryClient();
	const { id: userId } = useParams<{ id: string }>() as { id: string };

	return (data: IComment) => {
		const currentData =
			(queryClient.getQueryData(["user", userId, "posts"]) as IPost[]) || [];

		const updatedData = currentData.map((p) =>
			p._id === postId ? { ...p, comments: [...p.comments, data] } : p,
		);

		queryClient.setQueryData(["user", userId, "posts"], updatedData);
	};
};

export default usePostCommentQuery;
