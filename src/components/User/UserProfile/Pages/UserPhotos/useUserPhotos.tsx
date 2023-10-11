import UseFetchPhotos from "@/components/User/UserFields/Photos/UseFetchPhotos";
import useProfileStatus from "@/hooks/useIsOwnProfile";
import { IUser } from "@/types/IUser";
import { useState } from "react";
import { useMatch, useOutletContext } from "react-router";

interface UseUserPhotosProps {
	isUsingLink?: boolean;
}

const useUserPhotos = ({ isUsingLink = true }: UseUserPhotosProps) => {
	const { user } = useOutletContext<{ user: IUser }>();
	const userFirstName = user?.firstName as string;

	const { isOwnProfile } = useProfileStatus();

	const isYourPhotos = !!useMatch("/user/:username/photos/by");

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
