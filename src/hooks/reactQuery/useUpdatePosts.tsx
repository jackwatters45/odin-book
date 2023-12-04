import { InfiniteData, useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router";

import { IPost } from "@/types/IPost";

type InfinitePostsResults = InfiniteData<IPost[]>;
const useUpdatePosts = () => {
	const { id: userId } = useParams<{ id: string }>() as { id: string };

	const queryClient = useQueryClient();

	const updatePosts = (data: IPost, fieldsToUpdate: Partial<IPost> | undefined) => {
		queryClient.setQueryData<InfinitePostsResults>(
			["user", userId, "posts"],
			(prevData) => {
				if (!prevData) return prevData;

				const updatedPages = prevData.pages.map((page) =>
					page.map((p) => {
						if (p._id === data._id) {
							return { ...p, ...(fieldsToUpdate || data) };
						}
						return p;
					}),
				);

				return {
					pages: updatedPages,
					pageParams: prevData.pageParams,
				};
			},
		);
	};

	return updatePosts;
};

export default useUpdatePosts;
