import useFetchFriends from "@/components/Friends/hooks/useFetchFriends";
import useFriendPageType from "./useFriendPageType";
import { useState } from "react";
import { FriendsQueryEndType } from "@/components/Friends/types/FriendsTypes";

interface UseUserFriendsProps {
	isUsingLink: boolean;
}

const useUserFriends = ({ isUsingLink }: UseUserFriendsProps) => {
	const friendType = useFriendPageType();

	const [selectedTab, setSelectedTab] = useState<FriendsQueryEndType>(friendType);
	const activeTabSelector = isUsingLink ? friendType : selectedTab;

	const { friends, ...rest } = useFetchFriends({
		queryEnd: activeTabSelector,
	});

	return { friends, friendType, setSelectedTab, activeTabSelector, ...rest };
};

export default useUserFriends;
