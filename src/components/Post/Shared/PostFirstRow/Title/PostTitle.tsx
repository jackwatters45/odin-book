import { Fragment } from "react";

import { IPost } from "@/types/IPost";
import useRenderTitleSegments from "@/utils/render/titleSegment/useRenderTitleSegments";
import { StyledPostTitle } from "./PostTitle.styles";
import usePostTitle from "@/components/Post/PostForm/hooks/usePostTitle";

interface PostTitleProps {
	post: IPost;
}

const PostTitle = ({ post }: PostTitleProps) => {
	const postTitleSegments = usePostTitle({ post });
	const renderTitleSegments = useRenderTitleSegments();

	return (
		<StyledPostTitle>
			{postTitleSegments.map((segment, index) => (
				<Fragment key={index}>{renderTitleSegments(segment)}</Fragment>
			))}
		</StyledPostTitle>
	);
};

export default PostTitle;
