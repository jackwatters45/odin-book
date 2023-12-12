import StandardButton from "@/components/Shared/StandardButton";
import useCancelFriendRequest from "../../../hooks/useCancelFriendRequest";
import { mdiAccountCancel } from "@mdi/js";

interface PendingFriendStatusProps {
	id: string;
	includeIcon: boolean;
}

const PendingFriendStatus = ({ id, includeIcon }: PendingFriendStatusProps) => {
	const cancelFriendRequest = useCancelFriendRequest(id);

	const handleCancelFriendRequest = () => cancelFriendRequest();

	return (
		<StandardButton
			colorClass={includeIcon ? "blue" : "standard"}
			text="Cancel"
			onClick={handleCancelFriendRequest}
			icon={includeIcon ? mdiAccountCancel : undefined}
		/>
	);
};

export default PendingFriendStatus;
