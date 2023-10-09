import UseFetchPhotos from "@/components/User/UserFields/Photos/UseFetchPhotos";
import useProfileStatus from "@/hooks/useIsOwnProfile";
import { IUser } from "@/types/IUser";
import { useMatch, useOutletContext } from "react-router";

const useUserPhotos = () => {
	const { user } = useOutletContext<{ user: IUser }>();
	const userFirstName = user?.firstName as string;
	const { isOwnProfile } = useProfileStatus();

	const matchDefault = !!useMatch("/user/:username/photos/");
	const matchOf = !!useMatch("/user/:username/photos/of");
	const matchBy = !!useMatch("/user/:username/photos/by");

	const isPhotosOfYou = !!matchOf || !!matchDefault;
	const isYourPhotos = !!matchBy;

	const { photos } = UseFetchPhotos({
		photosType: isPhotosOfYou ? "photos-of" : "photos-by",
	});

	return {
		userFirstName,
		isOwnProfile,
		isPhotosOfYou,
		isYourPhotos,
		photos,
	};
};

export default useUserPhotos;
