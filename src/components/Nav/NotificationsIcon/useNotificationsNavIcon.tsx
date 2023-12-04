import socket from "@/config/socket";

import { useQuery, useQueryClient } from "@tanstack/react-query";

import { useEffect } from "react";

import { apiBaseUrl } from "@/config/envVariables";

const fetchNotificationCount = async () => {
	const response = await fetch(`${apiBaseUrl}/notifications/count`, {
		credentials: "include",
		method: "GET",
	});

	const data = await response.json();
	if (!response.ok) throw new Error(data.message);
	return data;
};

const useNotificationsNavIcon = () => {
	const queryClient = useQueryClient();

	// fetch notification count on mount
	const { data: notificationCount } = useQuery({
		queryKey: ["me", "notifications", "count"],
		queryFn: fetchNotificationCount,
	});

	// socket for real time notification count updates
	useEffect(() => {
		socket.on("notificationCount", (data) => {
			queryClient.setQueryData(["me", "notifications", "count"], data);
		});

		return () => {
			socket.off("notificationCount");
		};
	}, [queryClient]);

	return {
		notificationCount,
	};
};

export default useNotificationsNavIcon;
