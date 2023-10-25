import { Navigate } from "react-router";

import { StyledDialogPostForm } from "../PostForm/PostForm.styles";
import DialogHeader from "@/components/Shared/DialogHeader";
import PostFirstRow from "../Shared/PostFirstRow";
import PostContent from "../PostDisplay/PostContent";
import Loading from "@/components/Shared/Loading";
import PostSharedFrom from "../Shared/PostSharedFrom";
import PostPhotos from "../Shared/PostPhotos";
import PostSocialDisplay from "../PostDisplay/PostSocialDisplay";
import PostSocial from "../PostDisplay/PostSocial";
import PostCommentInput from "../PostDisplay/PostCommentInput";
import { StyledViewPostContent } from "./ViewPost.styles";
import useViewPost from "./useViewPost";
import PostComments from "./Comments";

// TODO post comments
const ViewPost = () => {
	const {
		post,
		isLoading,
		ref,
		closeDialog,
		commentInputRef,
		handleClickComment,
		showReactions,
		showPhotos,
	} = useViewPost();

	return (
		<StyledDialogPostForm ref={ref}>
			{isLoading ? (
				<Loading />
			) : !post ? (
				<Navigate to="/404" />
			) : (
				<>
					<DialogHeader
						title={`${post.author.fullName}'s post`}
						closeDialog={closeDialog}
					/>
					<StyledViewPostContent>
						<PostFirstRow post={post} />
						{post.content && (
							<PostContent postContent={post.content} isPhotos={!!post.media?.length} />
						)}
						{post.sharedFrom && (
							<PostSharedFrom sharedFromPost={post.sharedFrom} showShowMore={true} />
						)}
						{showPhotos && (
							<PostPhotos postId={post._id} media={post.media as string[]} />
						)}
						{showReactions && <PostSocialDisplay post={post} />}
						<PostSocial post={post} handleClickComment={handleClickComment} />
						<PostComments comments={post.comments} />
						<PostCommentInput ref={commentInputRef} postId={post._id} />
					</StyledViewPostContent>
				</>
			)}
		</StyledDialogPostForm>
	);
};

export default ViewPost;
