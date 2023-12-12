import StandardButton from "@/components/Shared/StandardButton";
import useSendFriendRequest from "../../../hooks/useSendFriendRequest";
import { mdiAccountPlus } from "@mdi/js";

interface NotFriendStatusProps {
	id: string;
	includeIcon: boolean;
}

const NotFriendStatus = ({ id, includeIcon }: NotFriendStatusProps) => {
	const sendFriendRequest = useSendFriendRequest(id);
	const handleSendFriendRequest = () => sendFriendRequest();

	return (
		<StandardButton
			colorClass="blue"
			text="Add friend"
			onClick={handleSendFriendRequest}
			icon={includeIcon ? mdiAccountPlus : undefined}
		/>
	);
};

export default NotFriendStatus;
