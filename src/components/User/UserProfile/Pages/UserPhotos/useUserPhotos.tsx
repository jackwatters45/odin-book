import UseFetchPhotos from "@/components/User/UserFields/Photos/UseFetchPhotos";
import { useMatch } from "react-router";

const useUserPhotos = () => {
	const matchDefault = !!useMatch("/user/:username/photos/");
	const matchOf = !!useMatch("/user/:username/photos/of");
	const matchBy = !!useMatch("/user/:username/photos/by");

	const isPhotosOfYou = !!matchOf || !!matchDefault;
	const isYourPhotos = !!matchBy;

	const { photos } = UseFetchPhotos({
		photosType: isPhotosOfYou ? "photos-of" : "photos-by",
	});

	return { isPhotosOfYou, isYourPhotos, photos };
};

export default useUserPhotos;
