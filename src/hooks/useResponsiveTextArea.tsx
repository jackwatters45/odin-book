import { useRef } from "react";

const useResponsiveTextArea = () => {
	const textareaRef = useRef<HTMLTextAreaElement | null>(null);
	const handleInput = () => {
		const textarea = textareaRef.current;
		if (textarea) {
			textarea.style.height = "auto";
			textarea.style.height = `${textarea.scrollHeight}px`;
		}
	};

	return { textareaRef, handleInput };
};

export default useResponsiveTextArea;
