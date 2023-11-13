import useAboutFieldVisibility from "@/hooks/useAboutFieldVisibility";
import useProfileStatus from "@/hooks/useIsOwnProfile";
import { IUser } from "@/types/IUser";
import { useOutletContext } from "react-router";

const useUserAboutDetails = () => {
	const { isOwnProfile } = useProfileStatus();

	const { user } = useOutletContext<{ user: IUser }>();

	const audienceSettings = user.audienceSettings;

	const aboutYou = user?.aboutYou;

	const namePronunciation = user?.namePronunciation;

	const otherNames = user?.otherNames;
	const showOtherNames =
		useAboutFieldVisibility()(audienceSettings.otherNames) &&
		otherNames &&
		otherNames.length > 0;

	const favoriteQuotes = user?.favoriteQuotes;

	const userFirstName = user?.firstName;

	return {
		isOwnProfile,
		audienceSettings,
		aboutYou,
		namePronunciation,
		otherNames,
		showOtherNames,
		favoriteQuotes,
		userFirstName,
	};
};

export default useUserAboutDetails;
