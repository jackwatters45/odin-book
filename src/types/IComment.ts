import { UserPreview } from "./IPost";

export interface IComment {
	content: string;
	author: UserPreview;
	_id: string;
	createdAt: string;
	updatedAt: string;
	likes: [];
	replies: [];
	isDeleted: false;
	parentComment?: string;
}
