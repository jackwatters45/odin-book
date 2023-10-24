import PostContent from "./PostContent";
import PostFirstRow from "../Shared/PostFirstRow";
import PostSocial from "./PostSocial";
import PostCommentInput from "./PostCommentInput";
import { IPost } from "@/types/IPost";
import usePostDisplay from "./usePostDisplay";
import PostSocialDisplay from "./PostSocialDisplay";
import PostPhotos from "../Shared/PostPhotos";
import SharedFrom from "../Shared/PostSharedFrom/PostSharedForm";
import { StyledPostContainer } from "./PostDisplay.styles";

interface PostDisplayProps {
	post: IPost;
}

const PostDisplay = ({ post }: PostDisplayProps) => {
	const { commentInputRef, handleClickComment, showReactions, showPhotos } =
		usePostDisplay({
			post,
		});

	return (
		<StyledPostContainer>
			<PostFirstRow post={post} />
			{post.content && (
				<PostContent postContent={post.content} isPhotos={!!post.media?.length} />
			)}
			{post.sharedFrom && (
				<SharedFrom sharedFromPost={post.sharedFrom} showShowMore={true} />
			)}
			{showPhotos && <PostPhotos postId={post._id} media={post.media as string[]} />}
			{showReactions && <PostSocialDisplay post={post} />}
			<PostSocial post={post} handleClickComment={handleClickComment} />
			<PostCommentInput ref={commentInputRef} postId={post._id} />
		</StyledPostContainer>
	);
};

export default PostDisplay;
