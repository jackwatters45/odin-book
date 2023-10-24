import { useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router";

import { IPost } from "@/types/IPost";

const useCreatePostQuery = () => {
	const { id: userId } = useParams<{ id: string }>() as { id: string };

	const queryClient = useQueryClient();

	return (data: IPost) => {
		const currentData =
			(queryClient.getQueryData(["user", userId, "posts"]) as IPost[]) || [];

		const isUpdated = currentData.some((post) => post._id === data._id);
		const updatedData = isUpdated
			? currentData.map((post) => {
					if (post._id === data._id) return data;
					return post;
			  })
			: [data, ...currentData];

		queryClient.setQueryData(["user", userId, "posts"], updatedData);
	};
};

export default useCreatePostQuery;
