import { useState } from "react";

import { NotificationItemProps } from "./NotificationItem";
import useRejectFriendRequest from "@/components/Friends/hooks/useRejectFriendRequest";
import useAcceptFriendRequest from "@/components/Friends/hooks/useAcceptFriendRequest";
import { apiBaseUrl } from "@/config/envVariables";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { INotification } from "../types/NotificationType";

export type NotificationResponseState = "accepted" | "declined" | "pending";

const fetchMarkAsRead = async (id: string) => {
	const response = await fetch(`${apiBaseUrl}/notifications/${id}/read`, {
		method: "PATCH",
		credentials: "include",
	});

	const data = await response.json();
	if (!response.ok) throw new Error(data.message);

	return data;
};

const useNotificationItem = ({ notification }: NotificationItemProps) => {
	const queryClient = useQueryClient();

	// mark as read
	const notificationId = notification._id;
	const { mutate } = useMutation({
		mutationKey: ["me", "notifications"],
		mutationFn: fetchMarkAsRead,
		onSuccess: () => {
			queryClient.setQueryData<INotification[]>(
				["me", "notifications"],
				(prevNotifications) => {
					return (
						prevNotifications?.map((notification) => {
							return notification._id === notificationId
								? {
										...notification,
										isRead: true,
								  }
								: notification;
						}) ?? []
					);
				},
			);
		},
	});
	const handleClickMarkAsRead = () => mutate(notificationId);

	// friend request
	const isRequest = notification.type === "request received";

	const userId = notification.from._id;

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
		handleClickMarkAsRead,
		isRequest,
		responseState,
		handleClickAccept,
		handleClickDecline,
	};
};

export default useNotificationItem;
