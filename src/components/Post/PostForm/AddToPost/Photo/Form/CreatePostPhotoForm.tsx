import { Dispatch, SetStateAction } from "react";
import { Control, UseFormSetValue } from "react-hook-form";

import CreatePostPhotosPreview from "./PhotosPreview";
import { PhotoPreviews } from "../types/PhotoTypes";
import PhotoFormNoPreviews from "./PhotoFormNoPreviews";
import CreatePostPhotoCloseButton from "./CloseButton";
import { StyledCreatePostPhotoContainer } from "./CreatePostPhotoForm.styles";
import { PostFormValues } from "../../../types/PostFormTypes";

interface CreatePostPhotoFormProps {
	setValue: UseFormSetValue<PostFormValues>;
	savedMedia: string[] | undefined;
	control: Control<PostFormValues>;
	photoPreviews: PhotoPreviews;
	setPhotoPreviews: Dispatch<SetStateAction<PhotoPreviews>>;
}

const CreatePostPhotoForm = ({
	setValue,
	savedMedia,
	control,
	photoPreviews,
	setPhotoPreviews,
}: CreatePostPhotoFormProps) => {
	return (
		<StyledCreatePostPhotoContainer>
			<CreatePostPhotoCloseButton
				setValue={setValue}
				setPhotoPreviews={setPhotoPreviews}
			/>
			{!!(photoPreviews.length || savedMedia?.length) && (
				<CreatePostPhotosPreview
					control={control}
					setPhotoPreviews={setPhotoPreviews}
					unsavedMedia={photoPreviews}
					savedMedia={savedMedia}
				/>
			)}
			{!photoPreviews.length && !savedMedia?.length && (
				<PhotoFormNoPreviews control={control} setPhotoPreviews={setPhotoPreviews} />
			)}
		</StyledCreatePostPhotoContainer>
	);
};

export default CreatePostPhotoForm;
