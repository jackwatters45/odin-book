import { IFriendsDisplay } from "@/components/User/UserFields/Friends/types/FriendsTypes";
import { IUser } from "@/types/IUser";

type FriendsParam = IFriendsDisplay | undefined;

const getCurrentCityFriends = (user: IUser, friends: FriendsParam) => {
	const userCurrentCity = user?.placesLived?.find(({ type }) => type === "current");

	if (!userCurrentCity) return [];

	return friends?.filter(({ placesLived }) => {
		const friendCurrentCity = placesLived?.find(({ type }) => type === "current");
		return friendCurrentCity?.city === userCurrentCity?.city;
	});
};

export default getCurrentCityFriends;
