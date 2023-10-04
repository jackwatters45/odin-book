import { IncludesStartEndDates } from "@/types/IncludesDates";

export interface IWork extends IncludesStartEndDates {
	_id: string;
	company: string;
	current: boolean;
	position?: string;
	city?: string;
	description?: string;
}
