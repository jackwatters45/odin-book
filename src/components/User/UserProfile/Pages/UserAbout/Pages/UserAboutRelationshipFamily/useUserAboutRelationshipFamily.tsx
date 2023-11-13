import useAboutFieldVisibility from "@/hooks/useAboutFieldVisibility";
import useProfileStatus from "@/hooks/useIsOwnProfile";
import { IUser } from "@/types/IUser";
import { useOutletContext } from "react-router";

const useUserAboutRelationshipFamily = () => {
	const { isOwnProfile } = useProfileStatus();

	const { user } = useOutletContext<{ user: IUser }>();

	const audienceSettings = user.audienceSettings;

	const relationship = user?.relationshipStatus;

	const familyMembers = user?.familyMembers;

	const showFamilyMembers =
		useAboutFieldVisibility()(audienceSettings.familyMembers) &&
		!!familyMembers &&
		familyMembers.length > 0;

	return {
		isOwnProfile,
		relationship,
		audienceSettings,
		familyMembers,
		showFamilyMembers,
	};
};

export default useUserAboutRelationshipFamily;
