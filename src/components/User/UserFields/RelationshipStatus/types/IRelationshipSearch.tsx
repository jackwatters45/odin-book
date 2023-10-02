import { DefaultUserSearch } from "@/components/Shared/UserSearch/types/DefaultUserSearch";
import { ValidRelationshipStatusesType } from "./IRelationshipStatus";

export interface IRelationshipSearch extends DefaultUserSearch {
	status?: ValidRelationshipStatusesType["status"];
	startYear?: string;
	startMonth?: string;
	startDay?: string;
}
