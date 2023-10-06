import { Link } from "react-router-dom";
import React from "react";

import setBorderRadius from "./utils/setBorderRadius";
import { PhotosDisplayProps } from "../PhotosDisplay";
import {
	StyledPhotoPreview,
	StyledPhotosPreviewContainer,
} from "./PhotosDisplayPreview.styles";

const PhotosDisplayPreview = ({ photos, className }: PhotosDisplayProps) => {
	return (
		<StyledPhotosPreviewContainer className={className}>
			{photos?.map(({ media, postId }, index) => {
				const borderRadius = setBorderRadius(index, photos.length);

				return (
					<StyledPhotoPreview
						$BorderRadius={borderRadius}
						key={`${media}-${postId}-${index}`}
					>
						<Link to={`/post/${postId}`}>
							<img src={media} alt={"User photos"} />
						</Link>
					</StyledPhotoPreview>
				);
			})}
		</StyledPhotosPreviewContainer>
	);
};

export default PhotosDisplayPreview;
