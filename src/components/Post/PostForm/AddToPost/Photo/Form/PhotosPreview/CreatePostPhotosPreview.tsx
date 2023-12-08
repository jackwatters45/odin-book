import { Control, Controller } from "react-hook-form";
import { Dispatch, SetStateAction } from "react";
import { mdiPlusBoxMultiple } from "@mdi/js";
import { v4 as uuid } from "uuid";

import { PhotoPreviews } from "../../types/PhotoTypes";
import { PostFormValues } from "@/components/Post/PostForm/types/PostFormTypes";
import {
	StyledAddMorePhotosButton,
	StyledImageContainer,
	StyledLabel,
	StyledPostPhotosPreview,
} from "./CreatePostPhotosPreview.styles";
import { StyledHiddenPhotosOverlay } from "@/components/Post/Shared/PostPhotos/PostPhotos.styles";
import useCreatePostPhotosPreview from "./useCreatePostPhotosPreview";

interface CreatePostPhotosPreviewProps {
	control: Control<PostFormValues>;
	unsavedMedia: PhotoPreviews | undefined;
	savedMedia: string[] | undefined;
	setPhotoPreviews: Dispatch<SetStateAction<PhotoPreviews>>;
	setPhotosError: Dispatch<SetStateAction<string | undefined>>;
}

const CreatePostPhotosPreview = ({
	control,
	unsavedMedia,
	savedMedia,
	setPhotoPreviews,
	setPhotosError,
}: CreatePostPhotosPreviewProps) => {
	const { addPhotos, combinedPhotos, numPhotos, showNumHiddenPhotos } =
		useCreatePostPhotosPreview({
			unsavedMedia,
			savedMedia,
			setPhotoPreviews,
			setPhotosError,
		});

	return (
		<div>
			<Controller
				name="unsavedMedia"
				control={control}
				render={({ field }) => {
					const isDisabled = field.value && field.value?.length >= 10;
					return (
						<StyledLabel htmlFor="add-photo-post">
							<input
								id="add-photo-post"
								hidden
								type="file"
								accept="image/*"
								multiple
								disabled={isDisabled}
								onChange={async (e) => await addPhotos(e, field)}
							/>
							{!isDisabled && (
								<StyledAddMorePhotosButton
									text="Add photos"
									icon={mdiPlusBoxMultiple}
									colorClass="white"
									className="add-more-photos-button"
								/>
							)}
						</StyledLabel>
					);
				}}
			/>
			<StyledPostPhotosPreview $numPhotos={numPhotos}>
				{combinedPhotos?.slice(0, 5).map((image, index) => {
					const isLastPhoto = index === 4;
					return (
						<StyledImageContainer key={`${uuid()}-image`}>
							<img src={image} alt="preview" />
							{showNumHiddenPhotos && isLastPhoto && (
								<StyledHiddenPhotosOverlay>
									+{combinedPhotos.length - 5}
								</StyledHiddenPhotosOverlay>
							)}
						</StyledImageContainer>
					);
				})}
			</StyledPostPhotosPreview>
		</div>
	);
};

export default CreatePostPhotosPreview;
