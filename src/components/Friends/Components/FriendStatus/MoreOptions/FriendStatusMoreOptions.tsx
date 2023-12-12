import {
	NotFriendStatus,
	IsFriendStatus,
	RequestReceivedStatus,
	PendingFriendStatus,
} from "../StatusOptions";
import { UserStatusType } from "@/types/UserStatusType";

interface FriendsListMoreOptionsProps {
	id: string;
	isCurrentUser: boolean;
	hasMutualFriends: boolean;
	status: UserStatusType;
}

const FriendsListMoreOptions = ({
	id,
	isCurrentUser,
	hasMutualFriends,
	status,
}: FriendsListMoreOptionsProps) => {
	return isCurrentUser ? null : status === "friend" ? (
		<IsFriendStatus id={id} includeButton={false} />
	) : status === "request sent" ? (
		<PendingFriendStatus id={id} includeIcon={false} />
	) : status === "request received" ? (
		<RequestReceivedStatus id={id} includeIcon={false} />
	) : hasMutualFriends ? (
		<NotFriendStatus id={id} includeIcon={false} />
	) : null;
};

export default FriendsListMoreOptions;
