import useCommentQuery from "@/hooks/reactQuery/useCommentQuery";
import useMutateCustom from "@/hooks/reactQuery/useMutateCustom";
import { IComment } from "@/types/IComment";

interface useCommentMoreOptionsProps {
	postId: string;
	comment: IComment;
}

const useCommentMoreOptions = ({ postId, comment }: useCommentMoreOptionsProps) => {
	const { editCommentQuery } = useCommentQuery(postId);

	const { mutate: deleteComment } = useMutateCustom({
		queryUrl: `posts/${postId}/comments/${comment._id}`,
		method: "DELETE",
		onSuccessFn: editCommentQuery,
	});

	const handleDeleteComment = () => deleteComment({});

	return {
		handleDeleteComment,
	};
};

export default useCommentMoreOptions;
