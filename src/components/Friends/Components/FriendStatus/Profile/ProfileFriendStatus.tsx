import {
	NotFriendStatus,
	IsFriendStatus,
	RequestReceivedStatus,
	PendingFriendStatus,
} from "../StatusOptions";
import { UserStatusType } from "@/types/UserStatusType";

interface ProfileFriendStatusProps {
	id: string;
	status: UserStatusType | undefined;
}

const ProfileFriendStatus = ({ id, status }: ProfileFriendStatusProps) => {
	return status === "friend" ? (
		<IsFriendStatus id={id} includeButton={true} />
	) : status === "request sent" ? (
		<PendingFriendStatus id={id} includeIcon={true} />
	) : status === "request received" ? (
		<RequestReceivedStatus id={id} includeIcon={true} />
	) : (
		<NotFriendStatus id={id} includeIcon={true} />
	);
};

export default ProfileFriendStatus;
