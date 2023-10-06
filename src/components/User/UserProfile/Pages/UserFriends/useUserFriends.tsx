import useFetchFriends from "@/components/User/UserFields/Friends/useFetchFriends";
import { IUser } from "@/types/IUser";
import { useOutletContext } from "react-router";
import useFriendPageType from "./useFriendPageType";
import getHometownFriends from "./utils/getHometownFriends";
import getCurrentCityFriends from "./utils/getCurrentCityFriends";
import getCollegeFriends from "./utils/getCollegeFriends";

const useUserFriends = () => {
	const { user } = useOutletContext<{ user: IUser }>();

	const { friends } = useFetchFriends();

	const friendType = useFriendPageType();

	const userMutualFriends = friends?.filter(
		({ mutualFriends }) => mutualFriends?.length > 0,
	);

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
