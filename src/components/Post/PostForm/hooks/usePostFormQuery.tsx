import { InfiniteData, useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router";

import { IPost } from "@/types/IPost";

type InfinitePostsResults = InfiniteData<IPost[]>;

const useCreatePostQuery = () => {
	const { id: userId } = useParams<{ id: string }>() as { id: string };

	const queryClient = useQueryClient();

	return (data: IPost) => {
		queryClient.setQueryData<InfinitePostsResults>(
			["user", userId, "posts"],
			(prevData) => {
				if (!prevData) return { pages: [[data]], pageParams: [{ 0: null }] };
				const updatedPages = prevData.pages.map((page) =>
					page.map((p) => (p._id === data._id ? data : p)),
				);

				return {
					pages: updatedPages,
					pageParams: prevData.pageParams,
				};
			},
		);
	};
};

export default useCreatePostQuery;
