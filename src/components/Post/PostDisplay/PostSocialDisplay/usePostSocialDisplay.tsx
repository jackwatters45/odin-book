import { useEffect, useLayoutEffect, useRef, useState } from "react";

import { IPost } from "@/types/IPost";

interface UsePostSocialDisplayProps {
	post: IPost;
}

const usePostSocialDisplay = ({ post }: UsePostSocialDisplayProps) => {
	const commentCount = post.comments?.length;
	const shareCount = post.shareCount;

	const containerRef = useRef<HTMLDivElement>(null);

	const commentsSharesRef = useRef<HTMLDivElement>(null);

	const [showReactionText, setShowReactionText] = useState(true);
	const reactionsRef = useRef<HTMLDivElement>(null);
	const [reactionTextWidth, setReactionTextWidth] = useState(0);

	useLayoutEffect(() => {
		if (reactionTextWidth === 0 && reactionsRef.current) {
			setReactionTextWidth(reactionsRef.current.offsetWidth);
		}
	}, [reactionTextWidth, reactionsRef]);

	useEffect(() => {
		const checkAndSetReactionVisibility = () => {
			const isRefsNull =
				!containerRef.current || !reactionsRef.current || !commentsSharesRef.current;
			if (isRefsNull) return;

			const containerWidth = containerRef.current.offsetWidth;
			const commentsSharesWidth = commentsSharesRef.current.offsetWidth;

			setShowReactionText(reactionTextWidth <= containerWidth - commentsSharesWidth - 48);
		};
		checkAndSetReactionVisibility();

		window.addEventListener("resize", checkAndSetReactionVisibility);
		return () => window.removeEventListener("resize", checkAndSetReactionVisibility);
	}, [reactionTextWidth]);

	return {
		commentCount,
		shareCount,
		containerRef,
		reactionsRef,
		commentsSharesRef,
		showReactionText,
	};
};

export default usePostSocialDisplay;
