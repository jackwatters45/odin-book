import { IUser } from "@/types/IUser";
import { useOutletContext } from "react-router";

const useUserAboutRelationshipFamily = () => {
	const { user } = useOutletContext<{ user: IUser }>();

	const audienceSettings = user.audienceSettings;

	const relationship = user?.relationshipStatus;

	const familyMembers = user?.familyMembers;

	return {
		relationship,
		audienceSettings,
		familyMembers,
	};
};

export default useUserAboutRelationshipFamily;
