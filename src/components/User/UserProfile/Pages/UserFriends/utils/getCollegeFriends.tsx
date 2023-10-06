import { IFriendsDisplay } from "@/components/User/UserFields/Friends/types/FriendsTypes";
import { IUser } from "@/types/IUser";

type FriendsParam = IFriendsDisplay | undefined;

const getCollegeFriends = (user: IUser, friends: FriendsParam) => {
	const userColleges = user?.education?.filter(({ type }) => type === "college");

	return friends?.filter(({ education }) => {
		const friendColleges = education?.filter(({ type }) => type === "college");
		return friendColleges?.some(({ school }) => {
			return userColleges?.some(({ school: userSchool }) => school === userSchool);
		});
	});
};

export default getCollegeFriends;
