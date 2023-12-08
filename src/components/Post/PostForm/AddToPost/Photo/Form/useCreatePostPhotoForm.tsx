import { ControllerRenderProps } from "react-hook-form";
import { ChangeEvent, Dispatch, SetStateAction } from "react";

import useError from "@/components/Errors/useError";
import { PhotoPreview, PhotoPreviews } from "../types/PhotoTypes";
import { PostFormValues } from "../../../types/PostFormTypes";

interface useCreatePostPhotoFormProps {
	setPhotoPreviews: Dispatch<SetStateAction<PhotoPreviews>>;
}

const useCreatePostPhotoForm = ({ setPhotoPreviews }: useCreatePostPhotoFormProps) => {
	const { setError } = useError();

	const addPhotos = async (
		e: ChangeEvent<HTMLInputElement>,
		field: ControllerRenderProps<PostFormValues, "unsavedMedia">,
	) => {
		if (e.target.files) {
			const selectedFiles = Array.from(e.target.files);

			if (selectedFiles.length + (field?.value?.length || 0) > 10) {
				setError("You can only upload up to 10 photos.");
			}

			const previews = selectedFiles.map((file) => {
				const reader = new FileReader();
				reader.readAsDataURL(file);

				return new Promise((resolve) => {
					reader.onload = () => {
						resolve({ file, preview: reader.result as string });
					};
				}) as unknown as PhotoPreview;
			});

			Promise.all(previews).then((previewData) => {
				setPhotoPreviews((prev) => [...prev, ...previewData].slice(0, 10));
			});

			if (field.value) field.onChange([...field.value, ...selectedFiles].slice(0, 10));
			else field.onChange(selectedFiles);
		}
	};

	return addPhotos;
};

export default useCreatePostPhotoForm;
