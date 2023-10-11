import useProfileStatus from "@/hooks/useIsOwnProfile";
import { IUser } from "@/types/IUser";

interface UseProfileBasicInfoProps {
	user: IUser;
}
const useProfileBasicInfo = ({ user }: UseProfileBasicInfoProps) => {
	const { isOwnProfile } = useProfileStatus();

	const userMutualFriends = user.mutualFriends;

	const mutualFriendsLength = userMutualFriends?.length;

	const showMutual = !isOwnProfile && !!mutualFriendsLength;

	return { isOwnProfile, mutualFriendsLength, showMutual };
};

export default useProfileBasicInfo;
