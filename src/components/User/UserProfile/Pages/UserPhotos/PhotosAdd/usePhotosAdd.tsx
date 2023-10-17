import useCreatePostContext from "@/components/Post/CreatePost/context/useCreatePostContext";

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
