import { UserPreview } from "./IPost";
import { IReaction, ReactionType } from "./IReaction";

export interface IComment {
	_id: string;
	content: string;
	author: UserPreview;
	post: string;
	createdAt: string;
	updatedAt: string;
	reactions: IReaction[];
	popularReactions?: ReactionType[];
	replies: IComment[];
	isDeleted: false;
	parentComment?: string;
}
