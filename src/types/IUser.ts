import { AudienceSettings } from "./AudienceSettingsTypes";
import { IRelationshipStatus } from "../components/User/UserFields/RelationshipStatus/types/RelationshipTypes";
import { Gender } from "@/components/User/UserFields/Gender/types/GenderTypes";
import { FamilyMember } from "@/components/User/UserFields/FamilyMembers/types/FamilyMembersTypes";
import { OtherNames } from "@/components/User/UserFields/OtherNames/types/OtherNamesTypes";
import { INamePronunciation } from "@/components/User/UserFields/NamePronunciation/types/NamePronunciationTypes";
import { IEducation } from "@/components/User/UserFields/Education/types/EducationTypes";
import { IWork } from "@/components/User/UserFields/Work/types/WorkTypes";
import { IPlaceLived } from "@/components/User/UserFields/PlacesLived/types/PlacesLivedTypes";
import { ISocialLinks } from "@/components/User/UserFields/SocialLinks/types/SocialLinksTypes";
import { IntroData } from "./IntroTypes";
import { PronounsType } from "@/components/User/UserFields/Pronouns/types/PronounsTypes";

// Basic User Info
export interface BasicUserInfo {
	firstName: string;
	lastName: string;
	fullName: string;
	birthday: Date;
}

export interface UserLoginData {
	email: string;
	phoneNumber?: string;
	password?: string;
	facebookId?: string;
	googleId?: string;
	githubId?: string;
}

type StandardLoginType = "email" | "phoneNumber";
export interface UserVerificationData {
	isVerified: boolean;
	type: StandardLoginType;
	token?: string;
	tokenExpires?: number;
	code?: string;
}

export interface UserResetPasswordData {
	type: StandardLoginType;
	token?: string;
	tokenExpires?: number;
	code?: string;
}

// User Activity Data (all were objectIds)
export interface UserActivityData {
	friends: string[];
	savedPosts: string[];
	friendRequestsSent: string[];
	friendRequestsReceived: string[];
}

type userType = "user" | "admin" | "guest";

// User Deleted Data
interface DeletedData {
	deletedBy: string; // objectId
	deletedAt: Date;
	email: string;
	followerCount: number;
}

// User System Data
export interface UserSystemData {
	createdAt: string;
	updatedAt: string;
	userType: userType;
	isDeleted: boolean;
	deletedData: DeletedData | undefined;
	validUntil?: number;
	refreshTokens: string[] | undefined;
}

// User About Data
export interface UserAboutData {
	aboutYou: string | undefined;
	avatarUrl: string | undefined;
	audienceSettings: AudienceSettings;
	bio: string | undefined;
	coverPhotoUrl: string | undefined;
	education: IEducation[] | undefined;
	familyMembers: FamilyMember[] | undefined;
	favoriteQuotes: string | undefined;
	gender: Gender | undefined;
	hobbies: string[] | undefined;
	intro: IntroData | undefined;
	languages: string[] | undefined;
	namePronunciation: INamePronunciation | undefined;
	otherNames: OtherNames | undefined;
	placesLived: IPlaceLived[] | undefined;
	pronouns: PronounsType | undefined;
	relationshipStatus: IRelationshipStatus | undefined;
	socialLinks: ISocialLinks[] | undefined;
	taggedPosts: string[] | undefined;
	websites: string[] | undefined;
	work: IWork[] | undefined;
}

export interface IUser
	extends Document,
		BasicUserInfo,
		UserLoginData,
		UserActivityData,
		UserSystemData,
		UserAboutData {
	_id: string;
}
