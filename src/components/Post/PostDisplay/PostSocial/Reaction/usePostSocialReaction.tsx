import useCurrentUserCached from "@/hooks/auth/useCurrentUserCached";
import useMutateCustom from "@/hooks/reactQuery/useMutateCustom";
import useUpdatePosts from "@/hooks/reactQuery/useUpdatePosts";
import { IPost } from "@/types/IPost";
import { useEffect, useState } from "react";
import { ReactionType } from "@/types/IReaction";

const usePostSocialReaction = (post: IPost) => {
	const currentUser = useCurrentUserCached();

	const updatePosts = useUpdatePosts();

	// is reaction
	const hasCurrentUserReacted = post.reactions.some(
		(reaction) => String(reaction.user?._id) === String(currentUser?._id),
	);

	const [isReaction, setIsReaction] = useState(hasCurrentUserReacted);
	useEffect(() => {
		setIsReaction(hasCurrentUserReacted);
	}, [hasCurrentUserReacted, post]);

	// reaction requests
	const { mutate: reactToPost } = useMutateCustom({
		queryUrl: `posts/${post._id}/react`,
		method: "PATCH",
		onSuccessFn: (data: IPost) => {
			const updatedFields = {
				reactions: data.reactions,
				popularReactions: data.popularReactions,
			};
			updatePosts(data, updatedFields);
			setIsReaction(true);
		},
	});

	const { mutate: unreactToPost } = useMutateCustom({
		queryUrl: `posts/${post._id}/unreact`,
		method: "DELETE",
		onSuccessFn: (data: IPost) => {
			const updatedFields = {
				reactions: data.reactions,
				popularReactions: data.popularReactions,
			};
			updatePosts(data, updatedFields);
			setIsReaction(false);
		},
	});

	// hover effect
	const [showHoverOptions, setShowHoverOptions] = useState(false);
	const [hoverTimeoutId, setHoverTimeoutId] = useState(0);

	const handleClickReact = (type: ReactionType, hasUnlike = false) => {
		setShowHoverOptions(false);
		return isReaction && hasUnlike
			? unreactToPost({ data: { user: currentUser?._id, post: post._id, type } })
			: reactToPost({ data: { user: currentUser?._id, post: post._id, type } });
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

export default usePostSocialReaction;
