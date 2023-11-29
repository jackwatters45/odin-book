import { useRef } from "react";

import useQueryCustom from "@/hooks/reactQuery/useQueryCustom";
import { IPost } from "@/types/IPost";
import useViewPostContext from "./context/useViewPostContext";

const useViewPost = () => {
	const { postId, authorName, ref, closeDialog } = useViewPostContext();

	const { data: post, isLoading } = useQueryCustom<IPost>({
		queryUrl: `posts/${postId}`,
		queryKey: ["post", postId],
	});

	const commentInputRef = useRef<HTMLInputElement>(null);
	const handleClickComment = () => commentInputRef.current?.focus();

	const showReactions =
		post &&
		(post.reactions?.length > 0 || post.comments?.length > 0 || post.shareCount > 0);

	const showPhotos = post?.media && post.media.length > 0;

	return {
		authorName,
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
