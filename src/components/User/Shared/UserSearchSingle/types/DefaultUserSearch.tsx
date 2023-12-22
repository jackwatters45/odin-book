import { AudienceStatusOptions } from "@/types/AudienceSettingsTypes";

export interface DefaultUserSearch {
	search: string | undefined;
	user: string | undefined;
	audience: AudienceStatusOptions;
}
