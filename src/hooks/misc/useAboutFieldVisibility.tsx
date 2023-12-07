import {
	AudienceStatusMultiple,
	AudienceStatusOptions,
} from "@/types/AudienceSettingsTypes";
import useProfileStatus from "@/hooks/auth/useIsOwnProfile";

const useAboutFieldVisibility = () => {
	const { isOwnProfile, isFriend } = useProfileStatus();

	const isVisible = (audienceSetting: AudienceStatusOptions) =>
		audienceSetting === "Public"
			? true
			: audienceSetting === "Friends"
			? isFriend || isOwnProfile
			: isOwnProfile;

	return (audienceSettings: AudienceStatusMultiple) =>
		audienceSettings &&
		Object.values(audienceSettings).some((audience) => isVisible(audience));
};

export default useAboutFieldVisibility;
