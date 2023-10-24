import { useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router";

import { IPost } from "@/types/IPost";

const useUpdatePosts = () => {
	const { id: userId } = useParams<{ id: string }>() as { id: string };

	const queryClient = useQueryClient();

	const updatePosts = (data: IPost, fieldsToUpdate: Partial<IPost> | undefined) => {
		const currentData =
			(queryClient.getQueryData(["user", userId, "posts"]) as IPost[]) || [];

		const postIndex = currentData.findIndex((p) => p._id === data._id);
		if (postIndex !== -1) {
			const updatedData = [
				...currentData.slice(0, postIndex),
				{ ...currentData[postIndex], ...(fieldsToUpdate || data) },
				...currentData.slice(postIndex + 1),
			];

			queryClient.setQueryData(["user", userId, "posts"], updatedData);
		}
	};

	return updatePosts;
};

export default useUpdatePosts;
