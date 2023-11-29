import { useMatch } from "react-router";
import { useQuery } from "@tanstack/react-query";

import { apiBaseUrl } from "@/config/envVariables";
import { INotification } from "./types/NotificationType";
import splitArrayByDate from "./utils/splitArrayByDate";

const fetchNotifications = async (queryKeyEnd: string) => {
	const response = await fetch(
		`${apiBaseUrl}/notifications${queryKeyEnd ? `/${queryKeyEnd}` : ""}`,
		{
			method: "GET",
			credentials: "include",
		},
	);

	const data = await response.json();
	if (!response.ok) throw new Error(data.message);

	return data;
};

const useNotifications = () => {
	const queryKeyEnd = useMatch("/notifications/unread") ? "unread" : "";

	const { data: notifications, isLoading } = useQuery<INotification[]>({
		queryKey: ["me", "notifications", queryKeyEnd],
		queryFn: () => fetchNotifications(queryKeyEnd),
	});

	const isUnreadNotification =
		notifications?.some((notification) => !notification.isRead) ?? false;

	const [newNotifications, earlierNotifications] = splitArrayByDate(notifications ?? []);

	return {
		newNotifications,
		earlierNotifications,
		isLoading,
		isUnreadNotification,
	};
};

export default useNotifications;
