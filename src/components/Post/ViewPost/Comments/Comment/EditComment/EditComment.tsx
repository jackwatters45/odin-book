import { mdiSend } from "@mdi/js";

import {
	StyledSendIcon,
	StyledSendIconButton,
} from "@/components/Post/PostDisplay/PostCommentInput/PostCommentInput.styles";
import { BaseSyntheticEvent, ChangeEvent, forwardRef } from "react";
import { StyledCommentInputLabel } from "./EditComment.styles";
import useEditComment from "./useEditComment";

interface EditCommentProps {
	commentContent: string;
	commentValue: string;
	hideEditCommentForm: () => void;
	handleChangeInput: (a: ChangeEvent<HTMLInputElement>) => void;
	onSubmit: (e: BaseSyntheticEvent) => void;
}

const EditComment = forwardRef<HTMLInputElement, EditCommentProps>(
	(
		{
			commentContent,
			commentValue,
			hideEditCommentForm,
			handleChangeInput,
			onSubmit,
		}: EditCommentProps,
		ref,
	) => {
		const { handleEscape, isSubmitDisabled } = useEditComment({
			hideEditCommentForm,
			commentContent,
			commentValue,
		});

		return (
			<form onSubmit={onSubmit}>
				<StyledCommentInputLabel>
					<input
						type="text"
						placeholder="Write a comment..."
						defaultValue={commentContent}
						ref={ref}
						onChange={handleChangeInput}
						onKeyDown={handleEscape}
						style={{ color: "#1c1e21" }}
					/>
					<StyledSendIconButton disabled={isSubmitDisabled}>
						<StyledSendIcon
							path={mdiSend}
							size={0.75}
							color={isSubmitDisabled ? "rgba(0, 0, 0, 0.2)" : "#65676B"}
						/>
					</StyledSendIconButton>
				</StyledCommentInputLabel>
			</form>
		);
	},
);

EditComment.displayName = "EditComment";

export default EditComment;
