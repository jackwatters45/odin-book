import { useEffect, useState } from "react";

import useMutateCustom from "@/hooks/reactQuery/useMutateCustom";
import useCurrentUserCached from "@/hooks/useCurrentUserCached";
import useUpdateComment from "@/hooks/reactQuery/useUpdateComment";
import { IComment } from "@/types/IComment";
import { ReactionType } from "@/types/IReaction";

interface UseCommentReactionProps {
	comment: IComment;
	postId: string;
}

const useCommentReaction = ({ comment, postId }: UseCommentReactionProps) => {
	const currentUser = useCurrentUserCached();

	const updateComment = useUpdateComment();

	// is reaction
	const hasCurrentUserReacted = comment.reactions.some(
		(reaction) => String(reaction.user._id) === String(currentUser?._id),
	);

	const [isReaction, setIsReaction] = useState(hasCurrentUserReacted);
	useEffect(() => setIsReaction(hasCurrentUserReacted), [hasCurrentUserReacted, comment]);

	// reaction requests
	const { mutate: likeComment } = useMutateCustom({
		queryUrl: `posts/${postId}/comments/${comment._id}/react`,
		method: "POST",
		onSuccessFn: (data: IComment) => {
			updateComment(postId, data);
			setIsReaction(true);
		},
	});

	const { mutate: unlikeComment } = useMutateCustom({
		queryUrl: `posts/${postId}/comments/${comment._id}/unreact`,
		method: "DELETE",
		onSuccessFn: (data: IComment) => {
			updateComment(postId, data);
			setIsReaction(false);
		},
	});

	// hover effect
	const [showHoverOptions, setShowHoverOptions] = useState(false);
	const [hoverTimeoutId, setHoverTimeoutId] = useState(0);

	const handleClickReact = (type: ReactionType, hasUnlike = false) => {
		setShowHoverOptions(false);
		return isReaction && hasUnlike
			? unlikeComment({ data: { type } })
			: likeComment({ data: { type } });
	};

	const handleMouseEnter = () => {
		const timeoutId = setTimeout(() => {
			setShowHoverOptions(true);
		}, 1500) as unknown as number;
		setHoverTimeoutId(timeoutId);
	};

	const handleMouseLeave = () => {
		clearTimeout(hoverTimeoutId);
		setShowHoverOptions(false);
	};

	const handleOptionClick = (emoji: string) => {
		handleClickReact(emoji as ReactionType);
		setShowHoverOptions(false);
	};

	return {
		isReaction,
		handleClickReact,
		showHoverOptions,
		handleMouseEnter,
		handleMouseLeave,
		handleOptionClick,
	};
};

export default useCommentReaction;
