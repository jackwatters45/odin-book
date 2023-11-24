import { v4 as uuid } from "uuid";

import {
	StyledHiddenPhotosOverlay,
	StyledPostPhoto,
	StyledPostPhotoLink,
	StyledPostPhotos,
} from "./PostPhotos.styles";
import { HTMLAttributes } from "react";

interface PostPhotosProps extends HTMLAttributes<HTMLDivElement> {
	media: string[];
	postId: string;
	includeLink?: boolean;
}

const PostPhotos = ({ media, postId, includeLink = true, ...props }: PostPhotosProps) => {
	const showNumHiddenPhotos = media.length > 5;

	return (
		<StyledPostPhotos $numPhotos={media.length || 0} {...props}>
			{media.slice(0, 5).map((photo, index) => {
				const isLastPhoto = index === 4;
				return (
					<StyledPostPhotoLink key={`${uuid()}-${media}`} to={`/post/${postId}/photos`}>
						<StyledPostPhoto src={photo} alt="Post photo" />
						{showNumHiddenPhotos && isLastPhoto && (
							<StyledHiddenPhotosOverlay>+{media.length - 5}</StyledHiddenPhotosOverlay>
						)}
					</StyledPostPhotoLink>
				);
			})}
		</StyledPostPhotos>
	);
};

export default PostPhotos;
