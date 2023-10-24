import { IPost } from "@/types/IPost";
import usePostMoreOptions from "./usePostMoreOptions";
import { StyledMoreOptions } from "./PostMoreOptions.styles";
import PostMoreOptionsAudienceForm from "./EditAudienceForm";
import { StyledRadioFormDialog } from "@/components/Shared/RadioForm/RadioForm.styles";

interface PostMoreOptionsProps {
	post: IPost;
}

const PostMoreOptions = ({ post }: PostMoreOptionsProps) => {
	const {
		isOwnPost,
		isPostSaved,
		handleClickSavePost,
		handleOpenEditPost,
		handleOpenEditAudience,
		handleDeletePost,
		audienceFormRef,
		audienceFormProps,
	} = usePostMoreOptions({
		post,
	});

	return (
		<>
			<StyledMoreOptions
				categoryName={"Post"}
				isUsingDialog={true}
				isSaved={isPostSaved}
				saveMutation={handleClickSavePost}
				openForm={isOwnPost ? handleOpenEditPost : undefined}
				openAudienceForm={isOwnPost ? handleOpenEditAudience : undefined}
				deleteMutation={isOwnPost ? handleDeletePost : undefined}
			/>
			<StyledRadioFormDialog ref={audienceFormRef} id={"audience"}>
				<PostMoreOptionsAudienceForm
					initial={post.audience || "Friends"}
					{...audienceFormProps}
				/>
			</StyledRadioFormDialog>
		</>
	);
};

export default PostMoreOptions;
