import { Link } from "react-router-dom";

import {
	StyledPhoto,
	StyledPhotoPlaceholder,
	StyledPhotosContainer,
} from "./PhotosDisplay.styles";
import useContainerWidth from "@/components/User/UserProfile/context/useContainerWidth";
import { PhotoDisplayFields } from "../types/PhotosTypes";

export interface PhotosDisplayProps {
	photos: PhotoDisplayFields[] | undefined;
	className?: string;
}

const PhotosDisplay = ({ photos, className }: PhotosDisplayProps) => {
	const containerWidth = useContainerWidth();

	return (
		<StyledPhotosContainer className={className} $containerWidth={containerWidth}>
			{photos && photos.length ? (
				photos?.map(({ media, postId }, index) => (
					<StyledPhoto key={`${media}-${postId}-${index}`}>
						<Link to={`/post/${postId}/photos`}>
							<img src={media} alt={"User photos"} />
						</Link>
					</StyledPhoto>
				))
			) : (
				<StyledPhotoPlaceholder />
			)}
		</StyledPhotosContainer>
	);
};

export default PhotosDisplay;
