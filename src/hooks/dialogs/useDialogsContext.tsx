import usePostFormContext from "@/components/Post/PostForm/context/usePostFormContext";
import useViewPostContext from "@/components/Post/ViewPost/context/useViewPostContext";

const useDialogsContext = () => {
	const { closeDialog: closePostForm, isOpen: isPostFormOpen } = usePostFormContext();
	const { closeDialog: closeViewPost, isOpen: isViewPostOpen } = useViewPostContext();

	const closeAllDialogs = () => {
		closePostForm();
		closeViewPost();
	};

	return { closeAllDialogs, isPostFormOpen, isViewPostOpen };
};

export default useDialogsContext;
