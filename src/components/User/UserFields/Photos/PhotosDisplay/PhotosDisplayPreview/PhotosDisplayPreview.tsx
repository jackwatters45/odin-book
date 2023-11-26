import { Link } from "react-router-dom";
import React from "react";

import setBorderRadius from "./utils/setBorderRadius";
import { PhotosDisplayProps } from "../PhotosDisplay";
import {
	StyledPhotoPreview,
	StyledPhotosPreviewContainer,
} from "./PhotosDisplayPreview.styles";
import useContainerWidth from "@/components/User/UserProfile/context/useContainerWidth";

const PhotosDisplayPreview = ({ photos, className }: PhotosDisplayProps) => {
	const containerWidth = useContainerWidth();

	return (
		<StyledPhotosPreviewContainer className={className} $containerWidth={containerWidth}>
			{photos?.slice(0, 9).map(({ media, postId }, index) => {
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
