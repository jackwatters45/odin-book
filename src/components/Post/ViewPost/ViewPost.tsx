import { Navigate } from "react-router";

import { StyledDialogPostForm } from "../PostForm/PostForm.styles";
import DialogHeader from "@/components/Shared/DialogHeader";
import PostContent from "../PostDisplay/PostContent";
import Loading from "@/components/Shared/Loading";
import PostCommentInput from "../PostDisplay/PostCommentInput";
import {
	StyledCommentInputContainer,
	StyledPostComments,
	StyledPostFirstRow,
	StyledPostPhotos,
	StyledPostSharedFrom,
	StyledPostSocial,
	StyledPostSocialDisplay,
	StyledViewPostScrollContainer,
} from "./ViewPost.styles";
import useViewPost from "./useViewPost";

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
						<StyledPostFirstRow post={post} />
						{post.content && (
							<PostContent postContent={post.content} isPhotos={!!post.media?.length} />
						)}
						{post.sharedFrom && (
							<StyledPostSharedFrom
								sharedFromPost={post.sharedFrom}
								showShowMore={true}
							/>
						)}
						{showPhotos && (
							<StyledPostPhotos postId={post._id} media={post.media as string[]} />
						)}
						{showReactions && <StyledPostSocialDisplay post={post} />}
						<StyledPostSocial post={post} handleClickComment={handleClickComment} />
						<StyledPostComments comments={post.comments} postId={post._id} />
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
