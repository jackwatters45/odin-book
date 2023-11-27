import { IPost } from "@/types/IPost";
import { useRef } from "react";

interface UsePostDisplayProps {
	post: IPost;
}

const usePostDisplay = ({ post }: UsePostDisplayProps) => {
	const commentInputRef = useRef<HTMLInputElement>(null);
	const handleClickComment = () => commentInputRef.current?.focus();

	const showReactions =
		post.reactions?.length > 0 || post.comments?.length > 0 || post.shareCount > 0;

	const showPhotos = post?.media && post.media.length > 0;

	return {
		commentInputRef,
		handleClickComment,
		showReactions,
		showPhotos,
	};
};

export default usePostDisplay;
