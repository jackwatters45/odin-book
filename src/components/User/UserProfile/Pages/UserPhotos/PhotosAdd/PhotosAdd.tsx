import StandardButton from "@/components/Shared/StandardButton";
import usePhotosAdd from "./usePhotosAdd";

const PhotosAdd = () => {
	const { openCreatePostDialog } = usePhotosAdd();

	return (
		<StandardButton
			text="Add photos/video"
			colorClass="transparent-blue"
			onClick={openCreatePostDialog}
		/>
	);
};

export default PhotosAdd;
