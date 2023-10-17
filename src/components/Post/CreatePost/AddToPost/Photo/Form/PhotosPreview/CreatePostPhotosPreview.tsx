import { Control, Controller } from "react-hook-form";
import { Dispatch, SetStateAction } from "react";
import { mdiPlusBoxMultiple } from "@mdi/js";

import useCreatePostPhotoForm from "../useCreatePostPhotoForm";
import { PhotoPreviews } from "../../types/PhotoTypes";
import { FormValues } from "@/components/Post/CreatePost/types/CreatePostTypes";
import {
	StyledAddMorePhotosButton,
	StyledLabel,
	StyledPhotoPreviewContainer,
} from "./CreatePostPhotosPreview.styles";

interface CreatePostPhotosPreviewProps {
	control: Control<FormValues>;
	photoPreviews: PhotoPreviews;
	setPhotoPreviews: Dispatch<SetStateAction<PhotoPreviews>>;
}

const CreatePostPhotosPreview = ({
	control,
	setPhotoPreviews,
	photoPreviews,
}: CreatePostPhotosPreviewProps) => {
	const addPhotos = useCreatePostPhotoForm({ setPhotoPreviews });

	return (
		<div>
			<Controller
				name="media"
				control={control}
				render={({ field }) => (
					<StyledLabel htmlFor="add-photo-post">
						<input
							id="add-photo-post"
							hidden
							type="file"
							accept="image/*"
							multiple
							onChange={async (e) => await addPhotos(e, field)}
						/>
						<StyledAddMorePhotosButton
							text="Add photos"
							icon={mdiPlusBoxMultiple}
							colorClass="white"
							className="add-more-photos-button"
						/>
					</StyledLabel>
				)}
			/>
			<StyledPhotoPreviewContainer $numPreviews={photoPreviews.length}>
				{photoPreviews.slice(0, 6).map((preview) => (
					<img key={preview.preview} src={preview.preview} alt="preview" />
				))}
			</StyledPhotoPreviewContainer>
		</div>
	);
};

export default CreatePostPhotosPreview;
