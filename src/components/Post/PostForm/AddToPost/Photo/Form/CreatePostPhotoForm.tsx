import { Dispatch, SetStateAction, lazy, Suspense, useState } from "react";
import { Control, UseFormSetValue } from "react-hook-form";

import CreatePostPhotosPreview from "./PhotosPreview";
import { PhotoPreviews } from "../types/PhotoTypes";
import PhotoFormNoPreviews from "./PhotoFormNoPreviews";
import CreatePostPhotoCloseButton from "./CloseButton";
import { StyledCreatePostPhotoContainer } from "./CreatePostPhotoForm.styles";
import { PostFormValues } from "../../../types/PostFormTypes";

const PhotosError = lazy(() => import("./Error"));

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
	const [photosError, setPhotosError] = useState<string | undefined>("");

	return (
		<>
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
						setPhotosError={setPhotosError}
					/>
				)}
				{!photoPreviews.length && !savedMedia?.length && (
					<PhotoFormNoPreviews
						control={control}
						setPhotoPreviews={setPhotoPreviews}
						setPhotosError={setPhotosError}
					/>
				)}
			</StyledCreatePostPhotoContainer>
			<Suspense>
				<PhotosError photosError={photosError} setPhotosError={setPhotosError} />
			</Suspense>
		</>
	);
};

export default CreatePostPhotoForm;
