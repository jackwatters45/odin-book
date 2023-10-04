import { IncludesStartEndDates } from "@/types/IncludesDates";

export type PlaceLivedType = "current" | "hometown" | "default";

export interface IPlaceLived extends IncludesStartEndDates {
	_id: string;
	type: PlaceLivedType;
	city: string;
	state: string;
	country: string;
}
