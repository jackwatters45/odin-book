import useFriendStatus from "../useFriendStatus";
import { IUser } from "@/types/IUser";
import useCurrentUser from "@/hooks/useCurrentUser";

interface UseProfileFriendStatusProps {
	user: IUser;
}

const useProfileFriendStatus = ({ user }: UseProfileFriendStatusProps) => {
	const { user: currentUser } = useCurrentUser();

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
