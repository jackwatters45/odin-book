import { Fragment } from "react";

import { IPost } from "@/types/IPost";
import renderTitleSegment from "@/utils/render/titleSegment/titleSegments";
import { StyledPostTitle } from "./PostTitle.styles";
import usePostTitle from "@/components/Post/PostForm/hooks/usePostTitle";

interface PostTitleProps {
	post: IPost;
}

const PostTitle = ({ post }: PostTitleProps) => {
	const postTitleSegments = usePostTitle({ post });

	return (
		<StyledPostTitle>
			{postTitleSegments.map((segment, index) => (
				<Fragment key={index}>{renderTitleSegment(segment)}</Fragment>
			))}
		</StyledPostTitle>
	);
};

export default PostTitle;
