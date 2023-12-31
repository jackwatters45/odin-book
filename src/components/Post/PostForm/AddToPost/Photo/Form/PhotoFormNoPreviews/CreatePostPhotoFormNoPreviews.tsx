import { Dispatch, SetStateAction } from "react";
import { Control, Controller } from "react-hook-form";
import { mdiPlusBoxMultiple } from "@mdi/js";

import { PhotoPreviews } from "../../types/PhotoTypes";
import { IconCircleBackground } from "@/components/Nav/Nav.styles";
import useCreatePostPhotoForm from "../useCreatePostPhotoForm";
import { PostFormValues } from "@/components/Post/PostForm/types/PostFormTypes";
import {
	StyledAddPhotoLabel,
	StyledAddPhotoSubtext,
	StyledAddPhotoText,
} from "./CreatePostPhotoFormNoPreviews.styles";

interface CreatePostPhotoFormNoPreviewsProps {
	control: Control<PostFormValues>;
	setPhotoPreviews: Dispatch<SetStateAction<PhotoPreviews>>;
	setPhotosError: Dispatch<SetStateAction<string | undefined>>;
}

const CreatePostPhotoFormNoPreviews = ({
	control,
	setPhotoPreviews,
	setPhotosError,
}: CreatePostPhotoFormNoPreviewsProps) => {
	const addPhotos = useCreatePostPhotoForm({ setPhotoPreviews, setPhotosError });

	return (
		<StyledAddPhotoLabel htmlFor="add-photo-post">
			<Controller
				name="unsavedMedia"
				control={control}
				render={({ field }) => (
					<input
						id="add-photo-post"
						hidden
						type="file"
						accept="image/*"
						multiple
						onChange={async (e) => await addPhotos(e, field)}
					/>
				)}
			/>
			<IconCircleBackground path={mdiPlusBoxMultiple} size="2.5rem" color="black" />
			<StyledAddPhotoText>Add Photos</StyledAddPhotoText>
			<StyledAddPhotoSubtext>or drag and drop</StyledAddPhotoSubtext>
		</StyledAddPhotoLabel>
	);
};

export default CreatePostPhotoFormNoPreviews;
