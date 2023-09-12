import useQueryCustom from "@/hooks/useQueryCustom";
import { useParams } from "react-router";

export type UserPhotoPreview = {
	postId: string;
	media: string;
}[];

const useUserPhotos = () => {
	const { id: userId } = useParams<{ id: string }>();

	const { data: photos } = useQueryCustom<UserPhotoPreview>({
		queryUrl: `users/${userId}/photos?limit=9`,
		queryKey: ["user", userId, "photos"],
	});

	return {
		photos,
		userId,
	};
};

export default useUserPhotos;
