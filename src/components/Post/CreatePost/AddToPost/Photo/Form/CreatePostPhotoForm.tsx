import { Dispatch, SetStateAction } from "react";
import { Control, UseFormSetValue } from "react-hook-form";

import CreatePostPhotosPreview from "./PhotosPreview";
import { PhotoPreviews } from "../types/PhotoTypes";
import PhotoFormNoPreviews from "./PhotoFormNoPreviews";
import CreatePostPhotoCloseButton from "./CloseButton";
import { StyledCreatePostPhotoContainer } from "./CreatePostPhotoForm.styles";
import { FormValues } from "../../../types/CreatePostTypes";

interface CreatePostPhotoFormProps {
	setValue: UseFormSetValue<FormValues>;
	toggleIsAddingPhoto: () => void;
	control: Control<FormValues>;
	photoPreviews: PhotoPreviews;
	setPhotoPreviews: Dispatch<SetStateAction<PhotoPreviews>>;
}

const CreatePostPhotoForm = ({
	setValue,
	toggleIsAddingPhoto,
	control,
	photoPreviews,
	setPhotoPreviews,
}: CreatePostPhotoFormProps) => {
	return (
		<StyledCreatePostPhotoContainer>
			<CreatePostPhotoCloseButton
				setValue={setValue}
				toggleIsAddingPhoto={toggleIsAddingPhoto}
				setPhotoPreviews={setPhotoPreviews}
			/>
			{photoPreviews.length ? (
				<CreatePostPhotosPreview
					control={control}
					setPhotoPreviews={setPhotoPreviews}
					photoPreviews={photoPreviews}
				/>
			) : (
				<PhotoFormNoPreviews control={control} setPhotoPreviews={setPhotoPreviews} />
			)}
		</StyledCreatePostPhotoContainer>
	);
};

export default CreatePostPhotoForm;
