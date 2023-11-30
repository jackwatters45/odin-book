import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiBaseUrl } from "@/config/envVariables";
import { INotification } from "../types/NotificationType";
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
			queryClient.setQueryData<INotification[]>(
				["me", "notifications", queryKeyEnd],
				(prevNotifications) => {
					return (
						prevNotifications?.map((notification) => ({
							...notification,
							isRead: true,
						})) ?? []
					);
				},
			);
		},
	});

	const handleClickMarkAllAsRead = () => {
		if (isUnreadNotification) mutate();
	};

	return { handleClickMarkAllAsRead };
};

export default useMarkAllAsRead;