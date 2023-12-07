import useToggledState from "@/hooks/misc/useToggledState";

interface UsePostContentProps {
	postContent: string | undefined;
	isPhotos: boolean;
	showShowMore?: boolean;
}

const usePostContent = ({ postContent, isPhotos, showShowMore }: UsePostContentProps) => {
	const charCount = postContent?.length;

	const isLessThan100Chars = !!(charCount && charCount < 100);
	const [isShowMore, toggleIsShowMore] = useToggledState(false);

	const formattedPostContent =
		isShowMore || !showShowMore ? postContent : `${postContent?.slice(0, 100)}...`;

	const isBigText = isLessThan100Chars && !isPhotos;

	return {
		isLessThan100Chars,
		isShowMore,
		toggleIsShowMore,
		formattedPostContent,
		isBigText,
	};
};

export default usePostContent;
