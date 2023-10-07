import StandardButton from "@/components/Shared/StandardButton";
import useCancelFriendRequest from "../../hooks/useCancelFriendRequest";
import { mdiAccountCancel } from "@mdi/js";

interface PendingFriendStatusProps {
	id: string;
	toggleIsRequestSent: () => void;
	includeIcon: boolean;
}

const PendingFriendStatus = ({
	id,
	toggleIsRequestSent,
	includeIcon,
}: PendingFriendStatusProps) => {
	const cancelFriendRequest = useCancelFriendRequest({ id });

	const handleCancelFriendRequest = () => {
		cancelFriendRequest();
		toggleIsRequestSent();
	};

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
