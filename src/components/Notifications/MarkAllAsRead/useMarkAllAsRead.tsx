import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiBaseUrl } from "@/config/envVariables";
import { INotification } from "../types/NotificationType";

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

	const { mutate } = useMutation({
		mutationKey: ["me", "notifications"],
		mutationFn: fetchMarkAllAsRead,
		onSuccess: () => {
			queryClient.setQueryData<INotification[]>(
				["me", "notifications"],
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
