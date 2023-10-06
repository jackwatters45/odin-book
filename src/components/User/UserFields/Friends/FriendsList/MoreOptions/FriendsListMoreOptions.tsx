import StandardButton from "@/components/Shared/StandardButton";
import { mdiAccountRemoveOutline } from "@mdi/js";
import { StyledMoreOptions } from "./FriendsListMoreOptions.styles";
import useFriendsList from "./useFriendsList";
import RespondButton from "./RespondButton";

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
		handleSendFriendRequest,
		isUserFriend,
		handleUnfriendUser,
		isRequestSent,
		isRequestReceived,
		handleCancelFriendRequest,
		handleAcceptRequest,
		handleRejectRequest,
	} = useFriendsList({ id, requestSent, requestReceived, isFriend });

	return isUserFriend ? (
		<StyledMoreOptions
			categoryName={`friend-${id}`}
			openForm={undefined}
			deleteMutation={undefined}
			isUsingDialog={true}
			options={[
				{
					text: "Unfriend",
					icon: mdiAccountRemoveOutline,
					onClick: handleUnfriendUser,
				},
			]}
		/>
	) : isRequestSent ? (
		<StandardButton
			colorClass="standard"
			text="Cancel"
			onClick={handleCancelFriendRequest}
		/>
	) : isRequestReceived ? (
		<StyledMoreOptions
			categoryName={`friend-${id}`}
			openForm={undefined}
			deleteMutation={undefined}
			isUsingDialog={true}
			Button={RespondButton}
			options={[
				{
					text: "Confirm",
					icon: undefined,
					onClick: handleAcceptRequest,
				},
				{
					text: "Delete",
					icon: undefined,
					onClick: handleRejectRequest,
				},
			]}
		/>
	) : hasMutualFriends && !isCurrentUser ? (
		<StandardButton
			colorClass="blue"
			text="Add friend"
			onClick={handleSendFriendRequest}
		/>
	) : null;
};

export default FriendsListMoreOptions;
