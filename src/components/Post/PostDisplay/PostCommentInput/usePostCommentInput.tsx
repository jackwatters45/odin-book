import { useForm } from "react-hook-form";

import useMutateCustom from "@/hooks/reactQuery/useMutateCustom";
import useCurrentUserCached from "@/hooks/useCurrentUserCached";
import { IUser } from "@/types/IUser";
import { IComment } from "@/types/IComment";
import usePostCommentQuery from "@/hooks/reactQuery/usePostCommentQuery";

interface PostCommentInputProps {
	postId: string;
}

const usePostCommentInput = ({ postId }: PostCommentInputProps) => {
	const currentUserPreview = useCurrentUserCached() as IUser;

	const addCommentToPost = usePostCommentQuery({ postId });
	const { handleSubmit, setValue, watch } = useForm();
	const { mutate: createComment } = useMutateCustom({
		queryUrl: `posts/${postId}/comments`,
		method: "POST",
		onSuccessFn: (data: IComment) => addCommentToPost(data),
	});

	const onSubmit = handleSubmit((data) => {
		setValue("content", "");
		createComment({ data });
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
