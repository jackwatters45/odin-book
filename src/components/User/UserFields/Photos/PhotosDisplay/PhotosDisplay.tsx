import { Link } from "react-router-dom";

import { StyledPhoto, StyledPhotosContainer } from "./PhotosDisplay.styles";
import { IPhotosDisplay } from "../types/PhotosTypes";

export interface PhotosDisplayProps {
	photos: IPhotosDisplay | undefined;
	className?: string;
}

const PhotosDisplay = ({ photos, className }: PhotosDisplayProps) => {
	return (
		<StyledPhotosContainer className={className}>
			{photos?.map(({ media, postId }, index) => (
				<StyledPhoto key={`${media}-${postId}-${index}`}>
					<Link to={`/post/${postId}`}>
						<img src={media} alt={"User photos"} />
					</Link>
				</StyledPhoto>
			))}
		</StyledPhotosContainer>
	);
};

export default PhotosDisplay;
