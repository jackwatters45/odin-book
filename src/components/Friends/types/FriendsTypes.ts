import { IEducation } from "@/components/User/UserFields/Education/types/EducationTypes";
import { IPlaceLived } from "@/components/User/UserFields/PlacesLived/types/PlacesLivedTypes";

export type FriendDisplayFields = {
	id: string;
	fullName: string;
	avatarUrl: string;
	education: IEducation[];
	placesLived: IPlaceLived[];
	mutualFriends: string[];
	isFriend: boolean;
	requestSent: boolean;
	requestReceived: boolean;
};

export type IFriendsDisplay = FriendDisplayFields[];
