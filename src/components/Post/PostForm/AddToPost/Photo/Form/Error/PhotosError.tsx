import { Dispatch, SetStateAction } from "react";
import { StyledPhotosError } from "./PhotosError.styles";
import usePhotosError from "./usePhotosError";

export interface PhotosErrorProps {
	photosError: string | undefined;
	setPhotosError: Dispatch<SetStateAction<string | undefined>>;
}

const PhotosError = ({ photosError, setPhotosError }: PhotosErrorProps) => {
	usePhotosError({ photosError, setPhotosError });

	return photosError && <StyledPhotosError>{photosError}</StyledPhotosError>;
};

export default PhotosError;
