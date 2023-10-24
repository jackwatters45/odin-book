import usePostContent from "./usePostContent";
import { StyledBodyText, StyledShowMoreButton } from "./PostContent.styles";

interface PostContentProps {
	postContent: string | undefined;
	isPhotos: boolean;
	showShowMore?: boolean;
}

const PostContent = ({
	postContent,
	isPhotos,
	showShowMore = false,
}: PostContentProps) => {
	const {
		isLessThan100Chars,
		isShowMore,
		toggleIsShowMore,
		formattedPostContent,
		isBigText,
	} = usePostContent({ postContent, isPhotos, showShowMore });

	return (
		<StyledBodyText $isBigText={isBigText}>
			{formattedPostContent}
			{!isLessThan100Chars && showShowMore && (
				<StyledShowMoreButton
					text={isShowMore ? "show less" : "show more"}
					colorClass="transparent-blue"
					onClick={toggleIsShowMore}
				/>
			)}
		</StyledBodyText>
	);
};

export default PostContent;
