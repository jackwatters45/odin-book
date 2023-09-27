import VALID_RELATIONSHIP_STATUSES_ARRAY from "@/components/User/UserFields/RelationshipStatus/validRelationshipStatuses";
import { IUser } from "./IUser";

export type ValidRelationshipStatusesType =
	(typeof VALID_RELATIONSHIP_STATUSES_ARRAY)[number];

type PartnerType = string | IUser;

export interface IRelationshipStatus {
	status: ValidRelationshipStatusesType["status"];
	partner: PartnerType | null;
}
