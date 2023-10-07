import useFriendsStatus from "../useFriendStatus";
import {
	NotFriendStatus,
	IsFriendStatus,
	RequestReceivedStatus,
	PendingFriendStatus,
} from "../StatusOptions";

interface FriendsListMoreOptionsProps {
	id: string;
	isCurrentUser: boolean;
	isFriend: boolean;
	requestSent: boolean;
	requestReceived: boolean;
	hasMutualFriends: boolean;
}

const FriendsListMoreOptions = ({
	id,
	isCurrentUser,
	isFriend,
	requestSent,
	requestReceived,
	hasMutualFriends,
}: FriendsListMoreOptionsProps) => {
	const {
		isUserFriend,
		isRequestSent,
		isRequestReceived,
		toggleIsUserFriend,
		toggleIsRequestSent,
		toggleIsRequestReceived,
	} = useFriendsStatus({ requestSent, requestReceived, isFriend });

	return isUserFriend ? (
		<IsFriendStatus
			id={id}
			toggleIsUserFriend={toggleIsUserFriend}
			includeButton={false}
		/>
	) : isRequestSent ? (
		<PendingFriendStatus
			id={id}
			toggleIsRequestSent={toggleIsRequestSent}
			includeIcon={false}
		/>
	) : isRequestReceived ? (
		<RequestReceivedStatus
			id={id}
			toggleIsRequestReceived={toggleIsRequestReceived}
			toggleIsUserFriend={toggleIsUserFriend}
			includeIcon={false}
		/>
	) : hasMutualFriends && !isCurrentUser ? (
		<NotFriendStatus
			id={id}
			toggleIsRequestSent={toggleIsRequestSent}
			includeIcon={false}
		/>
	) : null;
};

export default FriendsListMoreOptions;
