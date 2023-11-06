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
import {
	StyledCommentInputContainer,
	StyledViewPostScrollContainer,
} from "./ViewPost.styles";
import useViewPost from "./useViewPost";
import PostComments from "./Comments";

const ViewPost = () => {
	const {
		authorName,
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
			<DialogHeader title={`${authorName}'s post`} closeDialog={closeDialog} />
			{isLoading ? (
				<Loading />
			) : !post ? (
				<Navigate to="/404" />
			) : (
				<div>
					<StyledViewPostScrollContainer>
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
						<PostComments comments={post.comments} postId={post._id} />
					</StyledViewPostScrollContainer>
					<StyledCommentInputContainer>
						<PostCommentInput ref={commentInputRef} postId={post._id} />
					</StyledCommentInputContainer>
				</div>
			)}
		</StyledDialogPostForm>
	);
};

export default ViewPost;
