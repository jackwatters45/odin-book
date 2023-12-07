import useProfileStatus from "@/hooks/auth/useIsOwnProfile";
import { IUser } from "@/types/IUser";
import useContainerWidth from "../context/useContainerWidth";

interface UseProfileBasicInfoProps {
	user: IUser;
}

const useProfileBasicInfo = ({ user }: UseProfileBasicInfoProps) => {
	const containerWidth = useContainerWidth();

	const { isOwnProfile } = useProfileStatus();

	const userMutualFriends = user.mutualFriends;

	const mutualFriendsLength = userMutualFriends?.length;

	const showMutual = !isOwnProfile && !!mutualFriendsLength;

	return {
		containerWidth,
		isOwnProfile,
		mutualFriendsLength,
		showMutual,
	};
};

export default useProfileBasicInfo;
