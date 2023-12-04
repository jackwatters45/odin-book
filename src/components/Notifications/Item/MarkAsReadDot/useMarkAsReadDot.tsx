import { useMutation, useQueryClient } from "@tanstack/react-query";

import { apiBaseUrl } from "@/config/envVariables";
import { InfiniteNotificationsResults } from "@/components/Notifications/types/NotificationType";
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
			queryClient.setQueryData<InfiniteNotificationsResults>(
				["me", "notifications", queryKeyEnd],
				(prevNotifications) => {
					if (!prevNotifications) return { pages: [], pageParams: [] };

					const updatedPages = prevNotifications.pages.map((page) => {
						return page.map((notification) => {
							if (notification._id === notificationId) {
								return { ...notification, isRead: true };
							}
							return notification;
						});
					});

					return {
						pages: updatedPages,
						pageParams: prevNotifications.pageParams,
					};
				},
			);

			queryClient.setQueryData<number>(["me", "notifications", "count"], (prev) =>
				prev ? prev - 1 : 0,
			);
		},
	});
	const handleClickMarkAsRead = () => {
		mutate(notificationId);
	};

	return { handleClickMarkAsRead };
};

export default useMarkAsReadDot;
