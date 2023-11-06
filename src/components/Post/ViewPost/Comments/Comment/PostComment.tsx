import { mdiArrowRightBottomBold } from "@mdi/js";

import { IComment } from "@/types/IComment";
import MoreOptions from "./MoreOptions";
import usePostComment from "./usePostComment";
import EditComment from "./EditComment/EditComment";
import CommentDisplay from "./CommentDisplay";
import AuthorImage from "./AuthorImage";
import SocialOptions from "./SocialOptions";
import {
	StyledCommentContainer,
	StyledCommentContentSocialContainer,
	StyledContentMoreOptionsContainer,
	StyledFirstColumn,
	StyledReplyInputContainer,
	StyledViewRepliesButton,
} from "./PostComment.styles";
import PostCommentInput from "@/components/Post/PostDisplay/PostCommentInput";
import CommentInputBorder from "./Borders/CommentInputBorder";
import FirstColumnBorder from "./Borders/FirstColumnBorder";
import ReplyBorder from "./Borders/ReplyBorder";
import { SortOptions } from "../types/PostCommentTypes";

interface PostComment {
	comment: IComment;
	postId: string;
	sort: SortOptions;
	nestedCount?: number;
}

const PostComment = ({ comment, postId, sort, nestedCount = 0 }: PostComment) => {
	const {
		editCommentRef,
		showMoreOptions,
		handleMouseEnter,
		handleMouseLeave,
		isEditingComment,
		showEditCommentForm,
		onSubmit,
		commentValue,
		handleChangeInput,
		isDisplayingReplies,
		sortedReplies,
		isLoading,
		isReply,
		replyInputRef,
		handleClickReply,
		handleShowReplies,
	} = usePostComment({
		comment,
		postId,
		sort,
	});

	return (
		<>
			<StyledCommentContainer
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
				$nestedCount={nestedCount}
			>
				<ReplyBorder isReply={isReply} />
				<StyledFirstColumn>
					<AuthorImage author={comment.author} />
					<FirstColumnBorder
						nestedCount={nestedCount}
						replies={comment.replies}
						isDisplayingReplies={isDisplayingReplies}
					/>
				</StyledFirstColumn>
				<StyledCommentContentSocialContainer>
					<StyledContentMoreOptionsContainer>
						{isEditingComment ? (
							<EditComment
								ref={editCommentRef}
								commentContent={comment.content}
								commentValue={commentValue}
								hideEditCommentForm={showEditCommentForm}
								handleChangeInput={handleChangeInput}
								onSubmit={onSubmit}
							/>
						) : (
							<CommentDisplay comment={comment} />
						)}
						{!comment.isDeleted && (
							<MoreOptions
								showMoreOptions={showMoreOptions}
								postId={postId}
								comment={comment}
								showEditCommentForm={showEditCommentForm}
							/>
						)}
					</StyledContentMoreOptionsContainer>
					<SocialOptions
						comment={comment}
						postId={postId}
						handleClickReply={handleClickReply}
					/>
					{!isDisplayingReplies && comment.replies.length > 0 && (
						<StyledViewRepliesButton
							text={`View ${comment.replies.length} replies`}
							colorClass="transparent"
							icon={mdiArrowRightBottomBold}
							iconSize={0.5}
							onClick={handleShowReplies}
						/>
					)}
				</StyledCommentContentSocialContainer>
			</StyledCommentContainer>
			{isDisplayingReplies && !isLoading && (
				<>
					{sortedReplies?.map((reply) => (
						<PostComment
							key={reply._id}
							comment={reply}
							postId={postId}
							sort={sort}
							nestedCount={(nestedCount || 0) + 1}
						/>
					))}
					<StyledReplyInputContainer $nestedCount={nestedCount + 1}>
						<CommentInputBorder nestedCount={nestedCount} />
						<PostCommentInput
							ref={replyInputRef}
							postId={postId}
							commentId={comment._id}
						/>
					</StyledReplyInputContainer>
				</>
			)}
		</>
	);
};

export default PostComment;
