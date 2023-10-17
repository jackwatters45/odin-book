import { Dispatch, SetStateAction } from "react";
import { Control, Controller } from "react-hook-form";
import { mdiPlusBoxMultiple } from "@mdi/js";

import { PhotoPreviews } from "../../types/PhotoTypes";
import { IconCircleBackground } from "@/components/Nav/Nav.styles";
import useCreatePostPhotoForm from "../useCreatePostPhotoForm";
import { FormValues } from "@/components/Post/CreatePost/types/CreatePostTypes";
import {
	StyledAddPhotoLabel,
	StyledAddPhotoSubtext,
	StyledAddPhotoText,
} from "./CreatePostPhotoFormNoPreviews.styles";

interface CreatePostPhotoFormNoPreviewsProps {
	control: Control<FormValues>;
	setPhotoPreviews: Dispatch<SetStateAction<PhotoPreviews>>;
}

const CreatePostPhotoFormNoPreviews = ({
	control,
	setPhotoPreviews,
}: CreatePostPhotoFormNoPreviewsProps) => {
	const addPhotos = useCreatePostPhotoForm({ setPhotoPreviews });

	return (
		<StyledAddPhotoLabel htmlFor="add-photo-post">
			<Controller
				name="media"
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
