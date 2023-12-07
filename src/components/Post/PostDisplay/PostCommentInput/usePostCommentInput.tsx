import { useForm } from "react-hook-form";

import useMutateCustom from "@/hooks/reactQuery/useMutateCustom";
import useCurrentUserCached from "@/hooks/auth/useCurrentUserCached";
import { IUser } from "@/types/IUser";
import useCommentQuery from "@/hooks/reactQuery/useCommentQuery";

interface PostCommentInputProps {
	postId: string;
	commentId?: string;
}

const usePostCommentInput = ({ postId, commentId }: PostCommentInputProps) => {
	const currentUserPreview = useCurrentUserCached() as IUser;

	const queryUrl = commentId
		? `posts/${postId}/comments/${commentId}/reply`
		: `posts/${postId}/comments`;

	const { handleSubmit, setValue, watch } = useForm({
		defaultValues: { content: "" },
	});

	const { createCommentQuery } = useCommentQuery(postId);
	const { mutate: createComment } = useMutateCustom({
		queryUrl,
		method: "POST",
		onSuccessFn: createCommentQuery,
	});

	const onSubmit = handleSubmit((data) => {
		createComment({ data });
		setValue("content", "");
	});

	const comment = watch("content");

	return {
		currentUserPreview,
		onSubmit,
		setValue,
		comment,
	};
};

export default usePostCommentInput;
