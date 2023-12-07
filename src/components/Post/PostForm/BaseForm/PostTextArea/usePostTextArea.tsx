import { ChangeEvent } from "react";
import { UseFormSetValue } from "react-hook-form";

import usePostContent from "@/components/Post/Shared/usePostContent/usePostContent";
import useCurrentUserCached from "@/hooks/auth/useCurrentUserCached";
import { PostFormValues } from "../../types/PostFormTypes";

interface usePostTextAreaProps {
	setValue: UseFormSetValue<PostFormValues>;
	isPhotosSelected: boolean;
}

const usePostTextArea = ({ setValue, isPhotosSelected }: usePostTextAreaProps) => {
	const { textareaRef, handleInput } = usePostContent({ isPhotosSelected });

	const userFirstName = useCurrentUserCached()?.firstName;

	const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) =>
		setValue("content", e.target.value);

	return {
		textareaRef,
		handleInput,
		userFirstName,
		handleChange,
	};
};

export default usePostTextArea;
