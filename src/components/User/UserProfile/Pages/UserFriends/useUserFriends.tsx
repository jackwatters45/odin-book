import useFetchFriends from "@/components/Friends/hooks/useFetchFriends";
import { IUser } from "@/types/IUser";
import { useOutletContext } from "react-router";
import useFriendPageType from "./useFriendPageType";
import getHometownFriends from "./utils/getHometownFriends";
import getCurrentCityFriends from "./utils/getCurrentCityFriends";
import getCollegeFriends from "./utils/getCollegeFriends";
import useCurrentUserCached from "@/hooks/useCurrentUserCached";
import { useState } from "react";

interface UseUserFriendsProps {
	isUsingLink: boolean;
}

const useUserFriends = ({ isUsingLink }: UseUserFriendsProps) => {
	const currentUser = useCurrentUserCached();
	const { user } = useOutletContext<{ user: IUser }>();

	const { friends } = useFetchFriends();

	const userMutualFriends = friends?.filter(
		({ mutualFriends, id }) =>
			mutualFriends?.length > 0 && String(id) !== String(currentUser?._id),
	);

	const friendType = useFriendPageType();

	const [selectedTab, setSelectedTab] = useState(friendType);

	const activeTabSelector = isUsingLink ? friendType : selectedTab;

	let filteredFriends = friends;
	switch (activeTabSelector) {
		case "mutual":
			filteredFriends = userMutualFriends;
			break;
		case "college":
			filteredFriends = getCollegeFriends(user, friends);
			break;
		case "current-city":
			filteredFriends = getCurrentCityFriends(user, friends);
			break;
		case "hometown":
			filteredFriends = getHometownFriends(user, friends);
			break;
		default:
			filteredFriends = friends;
			break;
	}

	return { filteredFriends, friendType, setSelectedTab, activeTabSelector };
};

export default useUserFriends;
