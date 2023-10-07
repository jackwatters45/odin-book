import useFriendStatus from "../useFriendStatus";
import { IUser } from "@/types/IUser";
import useCurrentUserCached from "@/hooks/useCurrentUserCached";

interface UseProfileFriendStatusProps {
	user: IUser;
}

const useProfileFriendStatus = ({ user }: UseProfileFriendStatusProps) => {
	const currentUser = useCurrentUserCached();

	const friendStatus = !!(currentUser?._id && user.friends.includes(currentUser?._id));

	const requestReceived = !!(
		currentUser?._id &&
		currentUser.friendRequestsReceived.includes(user?._id) &&
		user.friendRequestsSent.includes(currentUser?._id)
	);

	const requestSent = !!(
		currentUser?._id &&
		currentUser.friendRequestsSent.includes(user?._id) &&
		user.friendRequestsReceived.includes(currentUser?._id)
	);

	const useFriendsReturn = useFriendStatus({
		requestSent,
		requestReceived,
		isFriend: friendStatus,
	});

	return { ...useFriendsReturn };
};

export default useProfileFriendStatus;
