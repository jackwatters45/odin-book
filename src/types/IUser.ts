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
	createdAt?: Date;
	updatedAt?: Date;
	userType: "user" | "admin" | "guest";
	isDeleted: boolean;
	deletedData?: DeletedData;
	validUntil?: number;
	refreshTokens: string[];
}

export interface WorkData {
	company: string;
	position?: string;
	city?: string;
	description?: string;
	startDate?: Date;
	endDate?: Date | null;
}

export interface EducationData {
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
	city: string;
	country: string;
	dateMovedIn?: Date;
	dateMovedOut?: Date | null;
}

export interface SocialLinksData {
	platform: string;
	username: string;
	url: string;
}

export interface LifeEventData {
	title: string;
	description?: string;
	date: Date;
}

// User About Data
export interface UserAboutData {
	work?: WorkData[];
	education?: EducationData[];
	placesLived?: PlaceLivedData[];
	website?: string;
	socialLinks?: SocialLinksData[];
	nicknames?: string[];
	lifeEvents?: LifeEventData[];

	intro?: string[]; // allow user to choose what to display out of the following: work, education, current city, hometown, relationship, name pron, joined, websites, social links

	bio?: string;
	hobbies?: string[];
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
