import { useForm } from "react-hook-form";
import { useMemo } from "react";

import { SortCommentsFormFields } from "./types/PostCommentTypes";
import useQueryCustom from "@/hooks/reactQuery/useQueryCustom";
import { IComment } from "@/types/IComment";

interface UsePostCommentsProps {
	postId: string;
}

interface FetchCommentsResponse {
	comments: IComment[];
	meta: {
		total: number;
		totalParent: number;
	};
}

const usePostComments = ({ postId }: UsePostCommentsProps) => {
	const { control, setValue, watch } = useForm<SortCommentsFormFields>({
		defaultValues: { sort: "Most relevant" },
	});

	const sort = watch("sort");

	const { data: comments } = useQueryCustom<FetchCommentsResponse, IComment[]>({
		queryUrl: `posts/${postId}/comments`,
		queryKey: ["post", postId, "comments"],
	});

	const sortedComments = useMemo(() => {
		return sort === "Most relevant"
			? comments?.sort((a, b) => {
					//reactions (most first)
					const reactionsDiff = b.reactions?.length - a.reactions?.length;
					if (reactionsDiff !== 0) return reactionsDiff;

					// replies (most first)
					const repliesDiff = b.replies?.length - a.replies?.length;
					if (repliesDiff !== 0) return repliesDiff;

					// created at (newest first)
					return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
			  })
			: comments?.sort(
					(a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
			  );
	}, [comments, sort]);

	return { control, setValue, sort, sortedComments };
};

export default usePostComments;
