import { IComment } from "@/types/IComment";
import CommentSort from "./CommentSort";
import NoCommentsPlaceholder from "./NoCommentsPlaceholder";
import Comment from "./Comment";
import { StyledCommentsContainer } from "./PostComments.styles";
import usePostComments from "./usePostComments";
import Loading from "@/components/Shared/Loading";
import { HTMLAttributes } from "react";

interface PostCommentsProps extends HTMLAttributes<HTMLDivElement> {
	comments: IComment[];
	postId: string;
}

const PostComments = ({ comments, postId, ...props }: PostCommentsProps) => {
	const { control, setValue, sort, sortedComments } = usePostComments({ postId });

	return comments.length ? (
		<div {...props}>
			<CommentSort control={control} setValue={setValue} />
			<StyledCommentsContainer>
				{sortedComments && sortedComments?.length > 0 ? (
					sortedComments?.map((comment) => (
						<Comment key={comment._id} comment={comment} sort={sort} postId={postId} />
					))
				) : (
					<Loading />
				)}
			</StyledCommentsContainer>
		</div>
	) : (
		<NoCommentsPlaceholder />
	);
};

export default PostComments;
