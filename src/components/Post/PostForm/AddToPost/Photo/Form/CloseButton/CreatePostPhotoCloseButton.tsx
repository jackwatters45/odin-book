import { mdiClose } from "@mdi/js";
import Icon from "@mdi/react";
import { UseFormSetValue } from "react-hook-form";
import { Dispatch, SetStateAction } from "react";

import { StyledCloseButton } from "./CreatePostPhotoCloseButton.styles";
import { PhotoPreviews } from "../../types/PhotoTypes";
import { PostFormValues } from "@/components/Post/PostForm/types/PostFormTypes";

interface CreatePostPhotoCloseButtonProps {
	setValue: UseFormSetValue<PostFormValues>;
	setPhotoPreviews: Dispatch<SetStateAction<PhotoPreviews>>;
}

const CreatePostPhotoCloseButton = ({
	setValue,
	setPhotoPreviews,
}: CreatePostPhotoCloseButtonProps) => {
	const handleClose = () => {
		setValue("media", []);
		setValue("unsavedMedia", []);
		setPhotoPreviews([]);
	};

	return (
		<StyledCloseButton type={"button"} onClick={handleClose}>
			<Icon path={mdiClose} size={0.8} color="#65676B" />
		</StyledCloseButton>
	);
};

export default CreatePostPhotoCloseButton;
