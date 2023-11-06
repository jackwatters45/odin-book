import { UserPreview } from "./IPost";

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
