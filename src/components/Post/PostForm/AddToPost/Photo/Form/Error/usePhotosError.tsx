import { useEffect } from "react";

import { PhotosErrorProps } from "./PhotosError";

const usePhotosError = ({ photosError, setPhotosError }: PhotosErrorProps) => {
	useEffect(() => {
		const timer = setTimeout(() => {
			setPhotosError("");
		}, 5000);

		return () => clearTimeout(timer);
	}, [photosError, setPhotosError]);
};

export default usePhotosError;
