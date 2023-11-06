import { UserPreview } from "./IPost";
import { IReaction, ReactionType } from "./IReaction";

export interface IComment {
	content: string;
	author: UserPreview;
	_id: string;
	createdAt: string;
	updatedAt: string;
	reactions: IReaction[];
	popularReactions?: ReactionType[];
	replies: IComment[];
	isDeleted: false;
	parentComment?: string;
}
