import { useEffect, useState } from "react";

import useAcceptFriendRequest from "@/components/Friends/hooks/useAcceptFriendRequest";
import useRejectFriendRequest from "@/components/Friends/hooks/useRejectFriendRequest";
import useCurrentUserCached from "@/hooks/useCurrentUserCached";
import useSendFriendRequest from "@/components/Friends/hooks/useSendFriendRequest";
import useRemoveSuggestedFriend from "@/components/Friends/hooks/useRemoveSuggestedFriend";
import useCancelFriendRequest from "@/components/Friends/hooks/useCancelFriendRequest";
import { buttonOptions, responseState } from "./types/FriendCardTypes";

const useFriendCard = (userId: string) => {
	const currentUser = useCurrentUserCached();

	// friend state
	const isFriend = currentUser?.friends.some(
		(friend) => String(friend) === String(userId),
	);

	// non-friend state
	const [requestSent, setRequestSent] = useState(false);

	const addFriend = useSendFriendRequest({ id: userId });
	const handleClickAddFriend = () => {
		addFriend();
		setRequestSent(true);
	};

	const remove = useRemoveSuggestedFriend(userId);
	const handleClickRemove = () => remove();

	const cancelRequest = useCancelFriendRequest({ id: userId });
	const handleClickCancelRequest = () => {
		cancelRequest();
		setRequestSent(false);
	};

	// request received state
	const [responseState, setResponseState] = useState<responseState>(undefined);
	const isFriendRequestReceived = currentUser?.friendRequestsReceived.some(
		(request) => String(request) === String(userId),
	);

	useEffect(() => {
		if (isFriendRequestReceived) setResponseState("pending");
	}, [isFriendRequestReceived]);

	const acceptRequest = useAcceptFriendRequest({ id: userId });
	const handleClickAccept = () => {
		acceptRequest();
		setResponseState("accepted");
	};

	const declineRequest = useRejectFriendRequest({ id: userId });
	const handleClickDecline = () => {
		declineRequest();
		setResponseState("declined");
	};

	const buttonOptions: buttonOptions = isFriend
		? []
		: responseState === "pending"
		? [
				{
					text: "Accept",
					colorClass: "blue",
					onClick: handleClickAccept,
				},
				{
					text: "Delete",
					colorClass: "standard",
					onClick: handleClickDecline,
				},
		  ]
		: responseState === "accepted"
		? [
				{
					text: "Request accepted",
					colorClass: "standard",
					onClick: undefined,
					disabled: true,
				},
		  ]
		: responseState === "declined"
		? [
				{
					text: "Request declined",
					colorClass: "standard",
					onClick: undefined,
					disabled: true,
				},
		  ]
		: requestSent
		? [
				{
					text: "Cancel",
					colorClass: "standard",
					onClick: handleClickCancelRequest,
				},
		  ]
		: [
				{
					text: "Add friend",
					colorClass: "light-blue",
					onClick: handleClickAddFriend,
				},
				{
					text: "Remove",
					colorClass: "standard",
					onClick: handleClickRemove,
				},
		  ];

	return { buttonOptions };
};

export default useFriendCard;
