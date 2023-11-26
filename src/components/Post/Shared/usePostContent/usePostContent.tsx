import useResponsiveTextArea from "@/hooks/useResponsiveTextArea";
import useWindowWidth from "@/hooks/useWindowWidth";
import { useCallback, useEffect } from "react";

export interface usePostContentProps {
	isPhotosSelected?: boolean;
}

const usePostContent = ({ isPhotosSelected }: usePostContentProps) => {
	const { textareaRef, handleInput: handleInputHeight } = useResponsiveTextArea();

	const windowWidth = useWindowWidth();

	const handleInput = useCallback(() => {
		const charCount = textareaRef.current?.value.length;
		const isTextSmall = isPhotosSelected || !!(charCount && charCount > 100);

		if (isTextSmall) {
			if (!textareaRef.current) return;
			textareaRef.current.style.fontSize = ".95rem";
			textareaRef.current.style.fontWeight = "500";
		} else {
			if (!textareaRef.current) return;
			textareaRef.current.style.fontSize = windowWidth > 400 ? "1.5rem" : "1.25rem";
			textareaRef.current.style.fontWeight = "400";
		}

		handleInputHeight();
	}, [handleInputHeight, isPhotosSelected, textareaRef, windowWidth]);

	useEffect(() => {
		handleInput();
	}, [handleInput]);

	return { textareaRef, handleInput };
};

export default usePostContent;
