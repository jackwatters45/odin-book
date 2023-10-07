import useIsOwnProfile from "@/hooks/useIsOwnProfile";
import { IUser } from "@/types/IUser";
import { useOutletContext } from "react-router";

const useUserAboutBasicInfo = () => {
	const isOwnProfile = useIsOwnProfile();

	const { user } = useOutletContext<{ user: IUser }>();

	const audienceSettings = user.audienceSettings;

	return {
		isOwnProfile,
		audienceSettings,
		user,
	};
};

export default useUserAboutBasicInfo;
