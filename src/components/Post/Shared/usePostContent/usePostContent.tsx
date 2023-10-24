import useResponsiveTextArea from "@/hooks/useResponsiveTextArea";
import { useCallback, useEffect } from "react";

export interface usePostContentProps {
	isPhotosSelected?: boolean;
}

const usePostContent = ({ isPhotosSelected }: usePostContentProps) => {
	const { textareaRef, handleInput: handleInputHeight } = useResponsiveTextArea();

	const handleInput = useCallback(() => {
		const charCount = textareaRef.current?.value.length;
		const isTextSmall = isPhotosSelected || !!(charCount && charCount > 100);

		if (isTextSmall) {
			if (!textareaRef.current) return;
			textareaRef.current.style.fontSize = ".95rem";
			textareaRef.current.style.fontWeight = "500";
		} else {
			if (!textareaRef.current) return;
			textareaRef.current.style.fontSize = "1.5rem";
			textareaRef.current.style.fontWeight = "400";
		}

		handleInputHeight();
	}, [handleInputHeight, isPhotosSelected, textareaRef]);

	useEffect(() => {
		handleInput();
	}, [handleInput]);

	return { textareaRef, handleInput };
};

export default usePostContent;
