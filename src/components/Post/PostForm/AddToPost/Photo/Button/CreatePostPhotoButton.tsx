import { mdiImageMultiple } from "@mdi/js";

import CreatePostAddButton from "../../Shared/Button";

interface CreatePostPhotoButtonProps {
	isAddingPhoto: boolean;
	toggleIsAddingPhoto: () => void;
	currentValue: (string | File)[] | undefined;
}

const CreatePostPhotoButton = ({
	isAddingPhoto,
	toggleIsAddingPhoto,
	currentValue,
}: CreatePostPhotoButtonProps) => {
	return (
		<CreatePostAddButton
			title="Photo"
			isFormOpen={isAddingPhoto}
			openForm={toggleIsAddingPhoto}
			iconProps={{ path: mdiImageMultiple, size: 1.2, color: "#22c55e" }}
			isValue={!!currentValue?.length}
			activeColor="#E4F0D5"
		/>
	);
};

export default CreatePostPhotoButton;
