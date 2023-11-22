import StandardButton from "@/components/Shared/StandardButton";
import useSendFriendRequest from "../../../hooks/useSendFriendRequest";
import { mdiAccountPlus } from "@mdi/js";

interface NotFriendStatusProps {
	id: string;
	toggleIsRequestSent: () => void;
	includeIcon: boolean;
}

const NotFriendStatus = ({
	id,
	toggleIsRequestSent,
	includeIcon,
}: NotFriendStatusProps) => {
	const sendFriendRequest = useSendFriendRequest({ id });
	const handleSendFriendRequest = () => {
		sendFriendRequest();
		toggleIsRequestSent();
	};
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
