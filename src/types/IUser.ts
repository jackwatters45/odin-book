import VALID_RELATIONSHIP_STATUSES_ARRAY from "@/components/User/UserFields/RelationshipStatus/validRelationshipStatuses";
import AudienceStatusOptions from "./AudienceStatusOptions";
import { IRelationshipStatus } from "./IRelationshipStatus";
import { Gender } from "@/components/User/UserFields/Gender/types/GenderTypes";
import { FamilyMember } from "@/components/User/UserFields/FamilyMembers/types/FamilyMembers";

// Basic User Info
export interface BasicUserInfo {
	firstName: string;
	lastName: string;
	fullName: string;
	email: string;
	gender?: Gender;
	birthday: Date;
	pronouns?: "he/him" | "she/her" | "they/them";
	avatarUrl?: string;
	coverPhotoUrl?: string;
	description?: string;
	phoneNumber?: string;
}

export interface UserLoginData {
	password?: string;
	facebookId?: string;
	googleId?: string;
	githubId?: string;
}

export interface UserVerificationData {
	isVerified: boolean;
	type: "email" | "phoneNumber";
	token?: string;
	tokenExpires?: number;
	code?: string;
}

export interface UserResetPasswordData {
	type: "email" | "phoneNumber";
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

// User Deleted Data
interface DeletedData {
	deletedBy: string | undefined; // objectId
	deletedAt: Date;
	email: string;
	followerCount: number;
}

// User System Data
export interface UserSystemData {
	createdAt: string;
	updatedAt: string;
	userType: "user" | "admin" | "guest";
	isDeleted: boolean;
	deletedData?: DeletedData;
	validUntil?: number;
	refreshTokens: string[];
}

type IncludesStartEndDates = {
	startYear: string | undefined;
	startMonth: string | undefined;
	startDay: string | undefined;
	endYear: string | undefined;
	endMonth: string | undefined;
	endDay: string | undefined;
};
export interface WorkData extends IncludesStartEndDates {
	_id: string;
	company: string;
	current: boolean;
	position?: string;
	city?: string;
	description?: string;
}

export interface EducationData extends IncludesStartEndDates {
	_id: string;
	type: "college" | "high school";
	school: string;
	graduated: boolean;
	degree?: string;
	attendedFor?: "undergraduate" | "graduate school";
	concentrations?: string[];
	description?: string;
}

export type PlaceLivedType = "current" | "hometown" | "default";
export interface PlaceLivedData extends IncludesStartEndDates {
	_id: string;
	type: PlaceLivedType;
	city: string;
	state: string;
	country: string;
}

export const VALID_SOCIAL_PLATFORMS_ARRAY = [
	"twitter",
	"instagram",
	"linkedin",
	"youtube",
	"github",
	"snapchat",
	"spotify",
	"whatsapp",
] as const;

export type ValidSocialPlatformsType = (typeof VALID_SOCIAL_PLATFORMS_ARRAY)[number];
export interface SocialLinksData {
	_id: string;
	platform: ValidSocialPlatformsType;
	username: string;
}

export interface LifeEventData {
	_id: string;
	title: string;
	date: string;
}

export interface INamePronunciation {
	firstName: string;
	lastName: string;
	fullName: string;
}

export type ValidRelationshipStatusesType =
	(typeof VALID_RELATIONSHIP_STATUSES_ARRAY)[number];

export interface UserDetails {
	namePronunciation?: INamePronunciation;
	relationshipStatus?: IRelationshipStatus;
}

export type IntroField = Record<string, boolean>;
export type IntroFieldAudience = Record<string, AudienceStatusOptions>;

export interface IntroData {
	pronouns: IntroField;
	work: IntroField;
	education: IntroField;
	currentCity: IntroField;
	hometown: IntroField;
	relationshipStatus: IntroField;
	namePronunciation: IntroField;
	joined: IntroField;
	websites: IntroFieldAudience;
	socialLinks: IntroFieldAudience;
}

export type AudienceSettingsField = "Public" | "Friends" | "Only Me";

export interface AudienceSettings {
	currentCity: AudienceSettingsField;
	hometown: AudienceSettingsField;
	relationshipStatus: AudienceSettingsField;
	phoneNumber: AudienceSettingsField;
	email: AudienceSettingsField;
	gender: AudienceSettingsField;
	pronouns: AudienceSettingsField;
	birthday: AudienceSettingsField;
	languages: AudienceSettingsField;

	familyMembers: { [key: string]: AudienceSettingsField };
	websites: { [key: string]: AudienceSettingsField };
	socialLinks: { [key: string]: AudienceSettingsField };
	work: { [key: string]: AudienceSettingsField };
	education: { [key: string]: AudienceSettingsField };
	placesLived: { [key: string]: AudienceSettingsField };
}

type AllKeys<T> = keyof T | `${Extract<keyof T, string>}.${string}`;

export type UserAboutAudienceFormFields = AllKeys<AudienceSettings>;

// User About Data
export interface UserAboutData {
	work?: WorkData[];
	education?: EducationData[];
	placesLived?: PlaceLivedData[];
	websites?: string[];
	socialLinks?: SocialLinksData[];
	nicknames?: string[];

	languages: string[];

	intro: IntroData;

	audienceSettings: AudienceSettings;

	familyMembers?: FamilyMember[];

	bio?: string;
	hobbies?: string[];

	taggedPosts?: string[];
}

export interface IUser
	extends Document,
		BasicUserInfo,
		UserLoginData,
		UserActivityData,
		UserSystemData,
		UserDetails,
		UserAboutData {
	_id: string;
}
