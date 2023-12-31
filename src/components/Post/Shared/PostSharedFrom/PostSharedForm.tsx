import { IPost } from "@/types/IPost";
import PostContent from "../../PostDisplay/PostContent";
import {
	StyledPostFirstRow,
	StyledPostPhotos,
	StyledSharedFromPostContainer,
} from "./PostSharedFrom.styles";
import { HTMLAttributes } from "react";

interface PostSharedFromProps extends HTMLAttributes<HTMLDivElement> {
	sharedFromPost: IPost;
	showShowMore?: boolean;
}

const PostSharedFrom = ({
	sharedFromPost,
	showShowMore = false,
	...props
}: PostSharedFromProps) => {
	return (
		<StyledSharedFromPostContainer {...props}>
			{sharedFromPost?.media && sharedFromPost.media.length > 0 && (
				<StyledPostPhotos
					includeLink={false}
					postId={sharedFromPost._id}
					media={sharedFromPost.media as string[]}
					$numPhotos={sharedFromPost.media.length}
				/>
			)}
			{sharedFromPost?.sharedFrom && (
				<PostSharedFrom sharedFromPost={sharedFromPost?.sharedFrom} />
			)}
			<StyledPostFirstRow post={sharedFromPost} showMoreOptions={false} />
			<PostContent
				postContent={sharedFromPost.content}
				isPhotos={!!sharedFromPost.media?.length}
				showShowMore={showShowMore}
			/>
		</StyledSharedFromPostContainer>
	);
};

export default PostSharedFrom;
