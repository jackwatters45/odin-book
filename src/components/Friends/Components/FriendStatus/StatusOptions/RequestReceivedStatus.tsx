import useAcceptFriendRequest from "../../../hooks/useAcceptFriendRequest";
import useRejectFriendRequest from "../../../hooks/useRejectFriendRequest";
import RespondButton from "./Buttons/RespondButton";
import { StyledFriendStatusMoreOptions } from "../FriendStatus.styles";
import RespondButtonWithIcon from "./Buttons/RespondButtonWithIcon";

interface RequestReceivedStatusProps {
	id: string;
	includeIcon: boolean;
}

const RequestReceivedStatus = ({ id, includeIcon }: RequestReceivedStatusProps) => {
	const rejectRequest = useRejectFriendRequest(id);
	const handleRejectRequest = () => rejectRequest();

	const acceptRequest = useAcceptFriendRequest(id);
	const handleAcceptRequest = () => acceptRequest();

	return (
		<StyledFriendStatusMoreOptions
			categoryName={"friend"}
			isUsingDialog={true}
			Button={includeIcon ? RespondButtonWithIcon : RespondButton}
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
	);
};

export default RequestReceivedStatus;
