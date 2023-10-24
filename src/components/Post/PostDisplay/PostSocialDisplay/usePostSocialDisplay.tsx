import { useEffect, useRef, useState } from "react";

import { IPost } from "@/types/IPost";

interface UsePostSocialDisplayProps {
	post: IPost;
}

const usePostSocialDisplay = ({ post }: UsePostSocialDisplayProps) => {
	const commentCount = post.comments.length;
	const shareCount = post.shares.length;

	const [hideCommentShareText, setHideCommentShareText] = useState(false);
	const [hideReactionsText, setHideReactionsText] = useState(false);

	const postSocialDisplayContainerRef = useRef<HTMLDivElement>(null);

	const divHeight = 41;
	useEffect(() => {
		const checkFitting = () => {
			const container = postSocialDisplayContainerRef.current;
			if (container) {
				const isSingleLine = container.scrollHeight <= divHeight;
				if (!isSingleLine) {
					setHideCommentShareText(true);
					const isSingleLineAfterHidingCommentShareText =
						container.scrollHeight <= divHeight;
					if (!isSingleLineAfterHidingCommentShareText) {
						setHideReactionsText(true);
					}
				} else {
					setHideCommentShareText(false);
					setHideReactionsText(false);
				}
			}
		};

		checkFitting();
		window.addEventListener("resize", checkFitting);

		return () => {
			window.removeEventListener("resize", checkFitting);
		};
	}, [post]);

	return {
		commentCount,
		shareCount,
		hideCommentShareText,
		hideReactionsText,
		postSocialDisplayContainerRef,
	};
};

export default usePostSocialDisplay;
