import { IUser } from "@/types/IUser";
import {
	NotFriendStatus,
	IsFriendStatus,
	RequestReceivedStatus,
	PendingFriendStatus,
} from "../StatusOptions";
import useProfileFriendStatus from "./useProfileFriendStatus";

interface ProfileFriendStatusProps {
	user: IUser;
}

// TODO test
const ProfileFriendStatus = ({ user }: ProfileFriendStatusProps) => {
	const {
		isUserFriend,
		isRequestSent,
		isRequestReceived,
		toggleIsUserFriend,
		toggleIsRequestSent,
		toggleIsRequestReceived,
	} = useProfileFriendStatus({ user });

	return isUserFriend ? (
		<IsFriendStatus
			id={user._id}
			toggleIsUserFriend={toggleIsUserFriend}
			includeButton={true}
		/>
	) : isRequestSent ? (
		<PendingFriendStatus
			id={user._id}
			toggleIsRequestSent={toggleIsRequestSent}
			includeIcon={true}
		/>
	) : isRequestReceived ? (
		<RequestReceivedStatus
			id={user._id}
			toggleIsRequestReceived={toggleIsRequestReceived}
			toggleIsUserFriend={toggleIsUserFriend}
			includeIcon={true}
		/>
	) : (
		<NotFriendStatus
			id={user._id}
			toggleIsRequestSent={toggleIsRequestSent}
			includeIcon={true}
		/>
	);
};

export default ProfileFriendStatus;
