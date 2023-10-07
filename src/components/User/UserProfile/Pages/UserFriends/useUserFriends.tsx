import useFetchFriends from "@/components/User/UserFields/Friends/useFetchFriends";
import { IUser } from "@/types/IUser";
import { useOutletContext } from "react-router";
import useFriendPageType from "./useFriendPageType";
import getHometownFriends from "./utils/getHometownFriends";
import getCurrentCityFriends from "./utils/getCurrentCityFriends";
import getCollegeFriends from "./utils/getCollegeFriends";
import useCurrentUserCached from "@/hooks/useCurrentUserCached";

const useUserFriends = () => {
	const currentUser = useCurrentUserCached();

	const { friends } = useFetchFriends();

	const userMutualFriends = friends?.filter(
		({ mutualFriends, id }) =>
			mutualFriends?.length > 0 && String(id) !== String(currentUser?._id),
	);

	const friendType = useFriendPageType();
	const { user } = useOutletContext<{ user: IUser }>();

	let filteredFriends = friends;
	switch (friendType) {
		case "MUTUAL":
			filteredFriends = userMutualFriends;
			break;
		case "COLLEGE":
			filteredFriends = getCollegeFriends(user, friends);
			break;
		case "CURRENT_CITY":
			filteredFriends = getCurrentCityFriends(user, friends);
			break;
		case "HOMETOWN":
			filteredFriends = getHometownFriends(user, friends);
			break;
		default:
			filteredFriends = friends;
			break;
	}

	return { filteredFriends, friendType };
};

export default useUserFriends;
