import StandardButton from "@/components/Shared/StandardButton";
import useDialog from "@/hooks/useDialog";
import { StyledDialog } from "@/styles/SharedStyles";
import CreatePost from "../../../../Post/CreatePost/CreatePost";

const PhotosAdd = () => {
	const { ref, openDialog, closeDialog } = useDialog({});

	return (
		<div>
			<StandardButton
				text="Add photos/video"
				colorClass="transparent-blue"
				onClick={openDialog}
			/>
			<StyledDialog ref={ref} onClose={closeDialog}>
				<CreatePost />
			</StyledDialog>
		</div>
	);
};

export default PhotosAdd;
