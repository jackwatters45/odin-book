import useQueryCustom from "@/hooks/useQueryCustom";
import { useParams } from "react-router";
import { IPhotosDisplay } from "./types/PhotosTypes";

interface UseFetchPhotosProps {
	photosType: "photos-of" | "photos-by";
}

const UseFetchPhotos = ({ photosType }: UseFetchPhotosProps) => {
	const { id: userId } = useParams<{ id: string }>();

	const { data: photos } = useQueryCustom<IPhotosDisplay>({
		queryUrl: `users/${userId}/${photosType}?limit=9`,
		queryKey: ["user", userId, photosType],
	});

	return { userId, photos };
};

export default UseFetchPhotos;
