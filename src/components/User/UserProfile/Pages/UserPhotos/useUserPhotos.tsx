import UseFetchPhotos from "@/components/User/UserFields/Photos/UseFetchPhotos";
import useProfileStatus from "@/hooks/auth/useIsOwnProfile";
import { IUser } from "@/types/IUser";
import { useState } from "react";
import { useMatch, useOutletContext } from "react-router";

interface UseUserPhotosProps {
	isUsingLink?: boolean;
}

const useUserPhotos = ({ isUsingLink = true }: UseUserPhotosProps) => {
	const userFirstName = useOutletContext<{ user: IUser }>()?.user?.firstName;

	const { isOwnProfile } = useProfileStatus();

	const isYourPhotosRoot = !!useMatch("/user/:username/photos/by");
	const isYourPhotosNested = !!useMatch("/friends/:type/:username/photos/by");
	const isYourPhotos = isYourPhotosRoot || isYourPhotosNested;

	const { photos } = UseFetchPhotos({
		photosType: isYourPhotos ? "photos-by" : "photos-of",
	});

	const currentPath = isYourPhotos ? "by" : "of";
	const [selectedTab, setSelectedTab] = useState(currentPath);
	const activeTabSelector = isUsingLink ? currentPath : selectedTab;

	return {
		userFirstName,
		isOwnProfile,
		photos,
		activeTabSelector,
		setSelectedTab,
	};
};

export default useUserPhotos;
