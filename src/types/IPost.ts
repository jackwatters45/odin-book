import { AudienceStatusOptions } from "@/types/AudienceSettingsTypes";
import { IComment } from "./IComment";
import { IReaction, ReactionType } from "./IReaction";

export interface UserPreview {
	_id: string;
	fullName: string;
	avatarUrl?: string;
}

export interface CheckInValues {
	location: string;
	city: string;
	state: string;
	country: string;
}

export interface IPost {
	_id: string;
	content?: string;
	author: UserPreview;
	createdAt: string;
	updatedAt: string;
	reactions: IReaction[];
	popularReactions?: ReactionType[];
	comments: IComment[];
	shareCount: number;
	sharedFrom?: IPost;
	media?: string[];
	unsavedMedia?: File[];
	taggedUsers?: UserPreview[];
	feeling?: string;
	checkIn?: CheckInValues;
	audience: AudienceStatusOptions;
	to: UserPreview;
}

export type IPostKey = keyof IPost;
