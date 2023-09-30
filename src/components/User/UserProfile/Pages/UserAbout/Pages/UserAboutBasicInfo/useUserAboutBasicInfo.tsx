import { IUser } from "@/types/IUser";
import { useOutletContext } from "react-router";

const useUserAboutBasicInfo = () => {
	const { user } = useOutletContext<{ user: IUser }>();

	const audienceSettings = user.audienceSettings;

	return {
		audienceSettings,
		user,
	};
};

export default useUserAboutBasicInfo;
