import { mdiClose } from "@mdi/js";
import Icon from "@mdi/react";
import { UseFormSetValue } from "react-hook-form";
import { Dispatch, SetStateAction } from "react";

import { StyledCloseButton } from "./CreatePostPhotoCloseButton.styles";
import { PhotoPreviews } from "../../types/PhotoTypes";
import { CreatePostFormValues } from "@/components/Post/CreatePost/types/CreatePostTypes";

interface CreatePostPhotoCloseButtonProps {
	setValue: UseFormSetValue<CreatePostFormValues>;
	toggleIsAddingPhoto: () => void;
	setPhotoPreviews: Dispatch<SetStateAction<PhotoPreviews>>;
}

const CreatePostPhotoCloseButton = ({
	setValue,
	toggleIsAddingPhoto,
	setPhotoPreviews,
}: CreatePostPhotoCloseButtonProps) => {
	const handleClose = () => {
		setValue("media", []);
		setPhotoPreviews([]);
		toggleIsAddingPhoto();
	};

	return (
		<StyledCloseButton type={"button"} onClick={handleClose}>
			<Icon path={mdiClose} size={0.8} color="#65676B" />
		</StyledCloseButton>
	);
};

export default CreatePostPhotoCloseButton;
