import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiBaseUrl } from "@/config/envVariables";
import { InfiniteNotificationsResults } from "../types/NotificationType";
import { useMatch } from "react-router";

const fetchMarkAllAsRead = async () => {
	const response = await fetch(`${apiBaseUrl}/notifications/read/all`, {
		method: "PATCH",
		credentials: "include",
	});

	const data = await response.json();
	if (!response.ok) throw new Error(data.message);

	return data;
};

interface UseMarkAllAsReadProps {
	isUnreadNotification: boolean;
}

const useMarkAllAsRead = ({ isUnreadNotification }: UseMarkAllAsReadProps) => {
	const queryClient = useQueryClient();

	const queryKeyEnd = useMatch("/notifications/unread") ? "unread" : "all";

	const { mutate } = useMutation({
		mutationKey: ["me", "notifications", queryKeyEnd],
		mutationFn: fetchMarkAllAsRead,
		onSuccess: () => {
			queryClient.setQueryData<InfiniteNotificationsResults>(
				["me", "notifications", "all"],
				(prevNotifications) => {
					if (!prevNotifications) return { pages: [], pageParams: [] };

					const updatedPages = prevNotifications.pages.map((page) => {
						return page.map((notification) => ({
							...notification,
							isRead: true,
						}));
					});

					return {
						pages: updatedPages,
						pageParams: prevNotifications.pageParams,
					};
				},
			);

			queryClient.setQueryData<InfiniteNotificationsResults>(
				["me", "notifications", "unread"],
				() => ({ pages: [], pageParams: [null] }),
			);

			queryClient.setQueryData<number>(["me", "notifications", "count"], 0);
		},
	});

	const handleClickMarkAllAsRead = () => {
		if (isUnreadNotification) mutate();
	};

	return { handleClickMarkAllAsRead };
};

export default useMarkAllAsRead;
