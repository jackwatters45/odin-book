import AudienceStatusOptions from "./AudienceStatusOptions";

export interface FormFieldsWithAudience<T> {
	audience: AudienceStatusOptions;
	values: T | undefined;
}
