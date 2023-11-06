import { IComment } from "@/types/IComment";
import useCommentMoreOptions from "./useCommentMoreOptions";
import { StyledMoreOptions } from "./CommentMoreOptions.styles";

interface ViewPostMoreOptionsProps {
	showMoreOptions: boolean;
	postId: string;
	comment: IComment;
	showEditCommentForm: (() => void) | undefined;
}

const ViewPostMoreOptions = ({
	showMoreOptions,
	postId,
	comment,
	showEditCommentForm,
}: ViewPostMoreOptionsProps) => {
	const { handleDeleteComment } = useCommentMoreOptions({ postId, comment });

	return (
		<StyledMoreOptions
			categoryName={"Comment"}
			isUsingDialog={true}
			openForm={showEditCommentForm}
			deleteMutation={handleDeleteComment}
			showButton={showMoreOptions}
		/>
	);
};

export default ViewPostMoreOptions;
