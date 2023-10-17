import { DefaultUserSearch } from "@/components/User/Shared/UserSearchSingle/types/DefaultUserSearch";
import { IUser } from "@/types/IUser";
import { IncludesStartDates } from "@/types/IncludesDates";

export const VALID_RELATIONSHIP_STATUSES_ARRAY = [
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

export interface IRelationshipStatus extends IncludesStartDates {
	_id: string;
	user: Partial<IUser>;
	status: ValidRelationshipStatusesType["status"];
}

export interface IRelationshipSearch extends DefaultUserSearch, IncludesStartDates {
	status?: ValidRelationshipStatusesType["status"];
}
