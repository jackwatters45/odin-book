import { mdiImageMultiple } from "@mdi/js";

import CreatePostAddButton from "../../Shared/Button";

interface CreatePostPhotoButtonProps {
	isAddingPhoto: boolean;
	toggleIsAddingPhoto: () => void;
	isCurrentValue: boolean;
}

const CreatePostPhotoButton = ({
	isAddingPhoto,
	toggleIsAddingPhoto,
	isCurrentValue,
}: CreatePostPhotoButtonProps) => {
	return (
		<CreatePostAddButton
			title="Photo"
			isFormOpen={isAddingPhoto}
			openForm={toggleIsAddingPhoto}
			iconProps={{ path: mdiImageMultiple, size: 1.2, color: "#22c55e" }}
			isValue={isCurrentValue}
			activeColor="#E4F0D5"
		/>
	);
};

export default CreatePostPhotoButton;
