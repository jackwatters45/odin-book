import VALID_RELATIONSHIP_STATUSES_ARRAY from "@/components/User/UserFields/RelationshipStatus/types/validRelationshipStatuses";
import { IUser } from "../../../../../types/IUser";

export type ValidRelationshipStatusesType =
	(typeof VALID_RELATIONSHIP_STATUSES_ARRAY)[number];

export interface IRelationshipStatus {
	_id: string;
	user: Partial<IUser>;
	status: ValidRelationshipStatusesType["status"];
	startYear?: string;
	startMonth?: string;
	startDay?: string;
}
