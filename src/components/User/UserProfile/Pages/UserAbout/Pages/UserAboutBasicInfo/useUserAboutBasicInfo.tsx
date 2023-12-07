import useAboutFieldVisibility from "@/hooks/misc/useAboutFieldVisibility";
import useProfileStatus from "@/hooks/auth/useIsOwnProfile";
import { IUser } from "@/types/IUser";
import { useOutletContext } from "react-router";

const useUserAboutBasicInfo = () => {
	const { isOwnProfile } = useProfileStatus();

	const { user } = useOutletContext<{ user: IUser }>();

	const audienceSettings = user.audienceSettings;

	const showWebsites =
		useAboutFieldVisibility()(audienceSettings.websites) &&
		!!user?.websites &&
		user.websites.length > 0;

	const showSocialLinks =
		useAboutFieldVisibility()(audienceSettings.socialLinks) &&
		!!user?.socialLinks &&
		user.socialLinks.length > 0;

	return {
		isOwnProfile,
		audienceSettings,
		user,
		showWebsites,
		showSocialLinks,
	};
};

export default useUserAboutBasicInfo;
