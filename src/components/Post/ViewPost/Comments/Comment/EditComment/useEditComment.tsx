import { KeyboardEvent } from "react";

interface UseEditCommentProps {
	commentContent: string;
	hideEditCommentForm: () => void;
	commentValue: string;
}

const useEditComment = ({
	hideEditCommentForm,
	commentContent,
	commentValue,
}: UseEditCommentProps) => {
	const handleEscape = (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Escape") {
			e.preventDefault();
			hideEditCommentForm();
		}
	};

	const isSubmitDisabled = !commentValue || commentValue === commentContent;

	return {
		handleEscape,
		isSubmitDisabled,
	};
};

export default useEditComment;
