import { useMatch } from "react-router";
import { useInfiniteQuery } from "@tanstack/react-query";

import { apiBaseUrl } from "@/config/envVariables";
import { INotification } from "./types/NotificationType";
import splitArrayByDate from "./utils/splitArrayByDate";
import useInfiniteScroll from "@/hooks/dom/useInfiniteScroll";
import { useEffect, useState } from "react";

const ITEMS_PER_PAGE = 20;
interface FetchNotificationsParams {
	queryKeyEnd: string;
	pageParam?: number;
}

const fetchNotifications = async ({
	queryKeyEnd,
	pageParam = 0,
}: FetchNotificationsParams) => {
	const response = await fetch(
		`${apiBaseUrl}/notifications/${queryKeyEnd}?page=${pageParam}`,
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
	const queryKeyEnd = useMatch("/notifications/unread") ? "unread" : "all";

	const {
		data: unflattenedNotifications,
		isLoading,
		fetchNextPage,
		isFetchingNextPage,
		hasNextPage,
	} = useInfiniteQuery<INotification[]>({
		queryKey: ["me", "notifications", queryKeyEnd],
		queryFn: ({ pageParam }) => fetchNotifications({ queryKeyEnd, pageParam }),
		getNextPageParam: (lastPage, pages) =>
			lastPage?.length < ITEMS_PER_PAGE ? undefined : pages?.length,
	});

	// infinite scroll ui
	const { ref } = useInfiniteScroll<INotification[]>({
		data: unflattenedNotifications,
		hasNextPage,
		fetchNextPage,
	});

	// notifications split by date
	const notifications = unflattenedNotifications?.pages.flat() ?? [];
	// const [notifications, setNotifications] = useState<INotification[]>([]);
	// useEffect(() => {
	// 	setNotifications(unflattenedNotifications?.pages.flat() ?? []);
	// }, [unflattenedNotifications]);

	const isUnreadNotification =
		notifications?.some((notification) => !notification.isRead) ?? false;

	const [newNotifications, earlierNotifications] = splitArrayByDate(notifications ?? []);

	return {
		newNotifications,
		earlierNotifications,
		isLoading,
		isUnreadNotification,
		ref,
		isFetchingNextPage,
		hasNextPage,
	};
};

export default useNotifications;
