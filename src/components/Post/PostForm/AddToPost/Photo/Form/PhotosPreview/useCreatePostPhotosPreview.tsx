import { Dispatch, SetStateAction } from "react";

import { PhotoPreviews } from "../../types/PhotoTypes";
import useCreatePostPhotoForm from "../useCreatePostPhotoForm";

interface UseCreatePostPhotosPreviewProps {
	unsavedMedia: PhotoPreviews | undefined;
	savedMedia: string[] | undefined;
	setPhotoPreviews: Dispatch<SetStateAction<PhotoPreviews>>;
}
const useCreatePostPhotosPreview = ({
	unsavedMedia,
	savedMedia,
	setPhotoPreviews,
}: UseCreatePostPhotosPreviewProps) => {
	const addPhotos = useCreatePostPhotoForm({ setPhotoPreviews });

	const combinedPhotos = unsavedMedia
		?.map((preview) => preview.preview)
		.concat(savedMedia || []);

	const numPhotos = combinedPhotos?.length || 0;

	const showNumHiddenPhotos = numPhotos > 5;

	return { addPhotos, combinedPhotos, numPhotos, showNumHiddenPhotos };
};

export default useCreatePostPhotosPreview;
