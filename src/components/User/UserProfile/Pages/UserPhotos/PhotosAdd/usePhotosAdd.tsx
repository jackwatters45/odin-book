import useCreatePostContext from "@/components/Post/PostForm/context/usePostFormContext";

const usePhotosAdd = () => {
	const { openDialog } = useCreatePostContext();

	const openCreatePostDialog = () => {
		openDialog({ initialValues: undefined, initialOpenedState: "photo" });
	};

	return {
		openCreatePostDialog,
	};
};

export default usePhotosAdd;
