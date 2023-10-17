import useCreatePostContext from "@/components/Post/CreatePost/context/useCreatePostContext";
import StandardButton from "@/components/Shared/StandardButton";

const PhotosAdd = () => {
	const { openDialog } = useCreatePostContext();

	return (
		<StandardButton
			text="Add photos/video"
			colorClass="transparent-blue"
			onClick={openDialog}
		/>
	);
};

export default PhotosAdd;
