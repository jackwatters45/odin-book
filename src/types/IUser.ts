import AudienceStatusOptions from "./AudienceStatusOptions";

// Basic User Info
export interface BasicUserInfo {
	firstName: string;
	lastName: string;
	fullName: string;
	email: string;
	gender?: string;
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
	deletedBy: string | null; // objectId
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

export interface WorkData {
	_id: string;
	company: string;
	position?: string;
	city?: string;
	description?: string;
	startDate?: Date;
	endDate?: Date | null;
}

export interface EducationData {
	_id: string;
	type: "university" | "high school";
	school: string;
	degree?: string;
	fieldOfStudy?: string;
	city?: string;
	description?: string;
	startDate?: Date;
	endDate?: Date | null;
	concentration?: string;
	secondaryConcentrations?: string[];
	activities?: string[];
}

export interface PlaceLivedData {
	_id: string;
	type: "current" | "hometown" | "default";
	city: string;
	state: string;
	country: string;
	startDate?: Date;
	endDate?: Date | null;
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
	platform: ValidSocialPlatformsType;
	username: string;
}

export interface LifeEventData {
	title: string;
	description?: string;
	date: Date;
}

export interface INamePronunciation {
	firstName: string;
	lastName: string;
	fullName: string;
}

const VALID_RELATIONSHIP_STATUSES_ARRAY = [
	{ status: "single", partner: null },
	{ status: "in a relationship", partner: "string" },
	{ status: "engaged", partner: "string" },
	{ status: "married", partner: "string" },
	{ status: "in a civil union", partner: "string" },
	{ status: "in a domestic partnership", partner: "string" },
	{ status: "in an open relationship", partner: "string" },
	{ status: "it's complicated", partner: "string" },
	{ status: "separated", partner: "string" },
	{ status: "divorced", partner: "string" },
	{ status: "widowed", partner: "string" },
] as const;

export type ValidRelationshipStatusesType =
	(typeof VALID_RELATIONSHIP_STATUSES_ARRAY)[number];

export interface IRelationshipStatus {
	status: ValidRelationshipStatusesType["status"];
	partner: ValidRelationshipStatusesType["partner"];
}

export interface UserDetails {
	namePronunciation?: INamePronunciation;
	relationshipStatus?: IRelationshipStatus;
}

export type IntroField = Record<string, boolean>;
export type IntroFieldAudience = Record<string, AudienceStatusOptions>;

export interface IntroData {
	pronouns?: IntroField;
	work?: IntroField;
	education?: IntroField;
	currentCity?: IntroField;
	hometown?: IntroField;
	relationshipStatus?: IntroField;
	namePronunciation?: IntroField;
	joined: IntroField;
	websites?: IntroFieldAudience;
	socialLinks?: IntroFieldAudience;
}

// User About Data
export interface UserAboutData {
	work?: WorkData[];
	education?: EducationData[];
	placesLived?: PlaceLivedData[];
	websites?: string[];
	socialLinks?: SocialLinksData[];
	nicknames?: string[];
	lifeEvents?: LifeEventData[];

	intro: IntroData; // allow user to choose what to display out of the following: work, education, current city, hometown, relationship, name pron, joined, websites, social links

	bio?: string;
	hobbies?: string[];
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
