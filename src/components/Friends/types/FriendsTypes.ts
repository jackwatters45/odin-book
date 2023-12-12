import { IEducation } from "@/components/User/UserFields/Education/types/EducationTypes";
import { IPlaceLived } from "@/components/User/UserFields/PlacesLived/types/PlacesLivedTypes";
import { UserPreviewWithMutuals } from "@/types/UserPreviewWithMutuals";

export interface IFriendListDisplayFields extends UserPreviewWithMutuals {
	education: IEducation[];
	placesLived: IPlaceLived[];
}

export type FriendsQueryEndType =
	| "all"
	| "mutual"
	| "college"
	| "current-city"
	| "hometown";
