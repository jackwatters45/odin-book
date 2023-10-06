import { IFriendsDisplay } from "@/components/User/UserFields/Friends/types/FriendsTypes";
import { IUser } from "@/types/IUser";

type FriendsParam = IFriendsDisplay | undefined;

const getHometownFriends = (user: IUser, friends: FriendsParam) => {
	const userHometown = user?.placesLived?.find(({ type }) => type === "hometown");

	return friends?.filter(({ placesLived }) => {
		const friendHometown = placesLived?.find(({ type }) => type === "hometown");
		return friendHometown?.city === userHometown?.city;
	});
};

export default getHometownFriends;
