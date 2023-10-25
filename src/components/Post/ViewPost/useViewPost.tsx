import { useRef } from "react";

import useQueryCustom from "@/hooks/reactQuery/useQueryCustom";
import { IPost } from "@/types/IPost";
import useViewPostContext from "./context/useViewPostContext";

const useViewPost = () => {
	const { postId, ref, closeDialog } = useViewPostContext();

	const postIdTemp = postId || "6532021f19447873e74dc753";
	const { data: post, isLoading } = useQueryCustom<IPost>({
		queryUrl: `posts/${postIdTemp}`,
		queryKey: ["post", postIdTemp],
	});

	const commentInputRef = useRef<HTMLInputElement>(null);
	const handleClickComment = () => commentInputRef.current?.focus();

	const showReactions =
		post &&
		(post.reactions?.length > 0 || post.comments?.length > 0 || post.shares?.length > 0);

	const showPhotos = post?.media && post.media.length > 0;

	return {
		post,
		isLoading,
		ref,
		closeDialog,
		commentInputRef,
		handleClickComment,
		showReactions,
		showPhotos,
	};
};

export default useViewPost;
