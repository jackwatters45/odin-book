import { AudienceStatusOptions } from "@/types/AudienceSettingsTypes";
import { CheckInValues } from "../AddToPost/CheckIn/types/CheckInTypes";
import { TaggedUserType } from "../AddToPost/Tag/Form/types/TagTypes";
import { UserPreview } from "@/types/IPost";

export type InitialOpenedStateFields =
	| "checkIn"
	| "feeling"
	| "photo"
	| "tag"
	| "share"
	| "to";

export type InitialOpenedState = InitialOpenedStateFields | undefined;

export interface PostValues {
	_id?: string;
	audience: AudienceStatusOptions;
	content?: string;
	checkIn?: CheckInValues;
	feeling?: string;
	taggedUsers?: TaggedUserType[];
	media?: string[];
	unsavedMedia?: File[];
	to?: UserPreview;
}
export interface PostFormValues extends PostValues {
	sharedFrom?: string;
}
