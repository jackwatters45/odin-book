import { AudienceStatusOptions } from "@/types/AudienceSettingsTypes";
import { CheckInValues } from "../AddToPost/CheckIn/types/CheckInTypes";
import { TaggedUserType } from "../AddToPost/Tag/Form/types/TagTypes";

export type InitialOpenedStateFields = "checkIn" | "feeling" | "photo" | "tag";

export type InitialOpenedState = InitialOpenedStateFields | undefined;

export interface FormValues {
	audience: AudienceStatusOptions;
	content: string;
	checkIn: CheckInValues;
	feeling: string;
	taggedUsers: TaggedUserType[];
	media: File[]; // TODO not quite sure if right
}
