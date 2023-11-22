import { FriendPreview } from "@/components/Friends/types/FriendsTypes";
import { apiBaseUrl } from "@/config/envVariables";
import useCurrentUserCached from "@/hooks/useCurrentUserCached";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

const ITEMS_PER_PAGE = 12;

const fetchFriendRequests = async (limit: number) => {
	const res = await fetch(`${apiBaseUrl}/users/me/friend-requests?limit=${limit}`, {
		method: "GET",
		credentials: "include",
	});

	if (!res.ok) throw new Error((await res.json()).message);
	return await res.json();
};

const useFriendsHomeRequests = () => {
	const currentUser = useCurrentUserCached();

	const friendRequestsCount = currentUser?.friendRequestsReceived.length ?? 0;

	const [isViewMore, setIsViewMore] = useState(false);
	const handleClickViewMore = () => setIsViewMore(true);

	const { data: friendRequests, isLoading } = useQuery<FriendPreview[]>({
		queryKey: [currentUser?._id as string, "friends", "requests", friendRequestsCount],
		queryFn: () => fetchFriendRequests(friendRequestsCount),
	});

	const [users, setUsers] = useState<FriendPreview[]>([]);
	useEffect(() => {
		if (!friendRequests) return;
		setUsers(friendRequests.slice(0, isViewMore ? friendRequestsCount : ITEMS_PER_PAGE));
	}, [friendRequests, friendRequestsCount, isViewMore]);

	const showViewMore = friendRequestsCount > ITEMS_PER_PAGE && !isViewMore;

	return { users, isLoading, isViewMore, showViewMore, handleClickViewMore };
};

export default useFriendsHomeRequests;
