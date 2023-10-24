import { forwardRef } from "react";
import { mdiSend } from "@mdi/js";
import { Link } from "react-router-dom";

import { ImageCircle } from "@/components/Nav/Nav.styles";
import usePostCommentInput from "./usePostCommentInput";
import {
	StyledCommentContainer,
	StyledCommentInputLabel,
	StyledSendIcon,
} from "./PostCommentInput.styles";
import defaultUserAvatar from "@/components/User/UserFields/Avatar/utils/defaultUserAvatar";

interface PostCommentInputProps {
	postId: string;
}

const PostCommentInput = forwardRef<HTMLInputElement, PostCommentInputProps>(
	({ postId }, ref) => {
		const {
			currentUserPreview: { _id, avatarUrl, fullName },
			onSubmit,
			setValue,
			comment,
		} = usePostCommentInput({ postId });

		return (
			<StyledCommentContainer>
				<Link to={`/user/${_id}`}>
					<ImageCircle src={avatarUrl || defaultUserAvatar} alt={fullName} size={32} />
				</Link>
				<form style={{ width: "100%" }} onSubmit={onSubmit}>
					<StyledCommentInputLabel>
						<input
							type="text"
							placeholder="Write a comment..."
							ref={ref}
							onChange={(e) => setValue("content", e.target.value)}
						/>
						<button disabled={!comment}>
							<StyledSendIcon
								path={mdiSend}
								size={0.75}
								color={!comment ? "#e4e6eb" : "#65676B"}
							/>
						</button>
					</StyledCommentInputLabel>
				</form>
			</StyledCommentContainer>
		);
	},
);

PostCommentInput.displayName = "PostCommentInput";

export default PostCommentInput;
