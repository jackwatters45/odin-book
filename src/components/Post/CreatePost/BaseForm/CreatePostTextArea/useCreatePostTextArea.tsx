import useCurrentUserCached from "@/hooks/useCurrentUserCached";
import useResponsiveTextArea from "@/hooks/useResponsiveTextArea";

interface useCreatePostTextAreaProps {
	isPhotosSelected: boolean;
}

const useCreatePostTextArea = ({ isPhotosSelected }: useCreatePostTextAreaProps) => {
	const { textareaRef, handleInput: handleInputHeight } = useResponsiveTextArea();

	const handleInput = () => {
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
	};

	const userFirstName = useCurrentUserCached().firstName;

	return {
		textareaRef,
		handleInput,
		userFirstName,
	};
};

export default useCreatePostTextArea;
