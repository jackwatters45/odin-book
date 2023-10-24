import { AudienceStatusOptions } from "@/types/AudienceSettingsTypes";

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

export const reactionTypes = [
	"like",
	"dislike",
	"love",
	"haha",
	"wow",
	"sad",
	"angry",
	"hooray",
	"confused",
] as const;

export type ReactionType = (typeof reactionTypes)[number];

export interface IReaction {
	_id: string;
	parent: string;
	user: UserPreview;
	type: ReactionType;
	updatedAt: Date;
	createdAt: Date;
}

export const reactionTypeEmojis: Record<ReactionType, string> = {
	like: "👍",
	dislike: "👎",
	love: "❤️",
	haha: "😂",
	wow: "😮",
	sad: "😢",
	angry: "😡",
	hooray: "🎉",
	confused: "😕",
} as const;

export const getReactionTypeEmoji = (type: ReactionType) => reactionTypeEmojis[type];

export interface IPost {
	_id: string;
	content?: string;
	author: UserPreview;
	createdAt: string;
	updatedAt: string;
	reactions: IReaction[];
	popularReactions?: ReactionType[];
	comments: string[];
	shares: string[];
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
