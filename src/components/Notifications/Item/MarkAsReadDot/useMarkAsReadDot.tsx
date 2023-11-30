import { useMutation, useQueryClient } from "@tanstack/react-query";

import { apiBaseUrl } from "@/config/envVariables";
import { INotification } from "@/components/Notifications/types/NotificationType";
import { useMatch } from "react-router";

const fetchMarkAsRead = async (id: string) => {
	const response = await fetch(`${apiBaseUrl}/notifications/${id}/read`, {
		method: "PATCH",
		credentials: "include",
	});

	const data = await response.json();
	if (!response.ok) throw new Error(data.message);

	return data;
};

const useMarkAsReadDot = (id: string) => {
	const queryClient = useQueryClient();

	const queryKeyEnd = useMatch("/notifications/unread") ? "unread" : "all";

	// mark as read
	const notificationId = id;
	const { mutate } = useMutation({
		mutationKey: ["me", "notifications", queryKeyEnd],
		mutationFn: fetchMarkAsRead,
		onSuccess: () => {
			queryClient.setQueryData<INotification[]>(
				["me", "notifications", queryKeyEnd],
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
	const handleClickMarkAsRead = () => {
		mutate(notificationId);
	};

	return { handleClickMarkAsRead };
};

export default useMarkAsReadDot;
