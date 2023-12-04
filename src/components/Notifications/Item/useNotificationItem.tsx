import { useState } from "react";

import { NotificationItemProps } from "./NotificationItem";
import useRejectFriendRequest from "@/components/Friends/hooks/useRejectFriendRequest";
import useAcceptFriendRequest from "@/components/Friends/hooks/useAcceptFriendRequest";

export type NotificationResponseState = "accepted" | "declined" | "pending";

const useNotificationItem = ({ notification }: NotificationItemProps) => {
	// friend request
	const isRequest = notification.type === "request received";

	const userId = notification.from[0]._id;

	const [responseState, setResponseState] =
		useState<NotificationResponseState>("pending");

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

	return {
		isRequest,
		responseState,
		handleClickAccept,
		handleClickDecline,
	};
};

export default useNotificationItem;
