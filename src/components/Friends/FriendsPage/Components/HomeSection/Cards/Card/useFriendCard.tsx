import useAcceptFriendRequest from "@/components/Friends/hooks/useAcceptFriendRequest";
import useRejectFriendRequest from "@/components/Friends/hooks/useRejectFriendRequest";
import useSendFriendRequest from "@/components/Friends/hooks/useSendFriendRequest";
import useRemoveSuggestedFriend from "@/components/Friends/hooks/useRemoveSuggestedFriend";
import useCancelFriendRequest from "@/components/Friends/hooks/useCancelFriendRequest";
import { buttonOptions } from "./types/FriendCardTypes";
import { UserStatusType } from "@/types/UserStatusType";

const useFriendCard = (userId: string, userStatus: UserStatusType) => {
	const addFriend = useSendFriendRequest(userId);
	const handleClickAddFriend = () => addFriend();

	const remove = useRemoveSuggestedFriend(userId);
	const handleClickRemove = () => remove();

	const cancelRequest = useCancelFriendRequest(userId);
	const handleClickCancelRequest = () => cancelRequest();

	const acceptRequest = useAcceptFriendRequest(userId);
	const handleClickAccept = () => acceptRequest();

	const declineRequest = useRejectFriendRequest(userId);
	const handleClickDecline = () => declineRequest();

	const buttonOptions: buttonOptions =
		userStatus === "friend"
			? []
			: userStatus === "request received"
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
			: userStatus === "request accepted"
			? [
					{
						text: "Request accepted",
						colorClass: "standard",
						onClick: undefined,
						disabled: true,
					},
			  ]
			: userStatus === "request declined"
			? [
					{
						text: "Request declined",
						colorClass: "standard",
						onClick: undefined,
						disabled: true,
					},
			  ]
			: userStatus === "request sent"
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
