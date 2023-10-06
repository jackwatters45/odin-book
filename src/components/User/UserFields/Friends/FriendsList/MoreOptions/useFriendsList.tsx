import useUnfriendUser from "../../hooks/useUnfriendUser";
import { useState } from "react";
import useSendFriendRequest from "../../hooks/useSendFriendRequest";
import useCancelFriendRequest from "../../hooks/useCancelFriendRequest";
import useRejectFriendRequest from "../../hooks/useRejectFriendRequest";
import useAcceptFriendRequest from "../../hooks/useAcceptFriendRequest";

interface UseFriendsListProps {
	id: string;
	requestSent: boolean;
	requestReceived: boolean;
	isFriend: boolean;
}

const useFriendsList = ({
	id,
	requestSent,
	requestReceived,
	isFriend,
}: UseFriendsListProps) => {
	const [isUserFriend, setIsUserFriend] = useState(isFriend);

	const unfriendUser = useUnfriendUser({ id });
	const handleUnfriendUser = () => {
		unfriendUser();
		setIsUserFriend(false);
	};

	const [isRequestSent, setIsRequestSent] = useState(requestSent);

	const sendFriendRequest = useSendFriendRequest({ id });
	const handleSendFriendRequest = () => {
		sendFriendRequest();
		setIsRequestSent(true);
	};

	const cancelFriendRequest = useCancelFriendRequest({ id });

	const handleCancelFriendRequest = () => {
		cancelFriendRequest();
		setIsRequestSent(false);
	};

	const [isRequestReceived, setIsRequestReceived] = useState(requestReceived);

	const rejectRequest = useRejectFriendRequest({ id });
	const handleRejectRequest = () => {
		rejectRequest();
		setIsRequestReceived(false);
	};

	const acceptRequest = useAcceptFriendRequest({ id });
	const handleAcceptRequest = () => {
		acceptRequest();
		setIsRequestReceived(false);
		setIsUserFriend(true);
	};

	return {
		handleUnfriendUser,
		handleSendFriendRequest,
		isUserFriend,
		isRequestSent,
		isRequestReceived,
		handleCancelFriendRequest,
		handleRejectRequest,
		handleAcceptRequest,
	};
};

export default useFriendsList;
