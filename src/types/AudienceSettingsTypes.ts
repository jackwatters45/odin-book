export type AudienceStatusOptions = "Public" | "Friends" | "Only Me";

export type AudienceStatusMultiple = { [key: string]: AudienceStatusOptions };

export interface AudienceSettings {
	currentCity: AudienceStatusOptions;
	hometown: AudienceStatusOptions;
	relationshipStatus: AudienceStatusOptions;
	phoneNumber: AudienceStatusOptions;
	email: AudienceStatusOptions;
	gender: AudienceStatusOptions;
	pronouns: AudienceStatusOptions;
	birthday: AudienceStatusOptions;
	languages: AudienceStatusOptions;
	aboutYou: AudienceStatusOptions;
	namePronunciation: AudienceStatusOptions;
	favoriteQuotes: AudienceStatusOptions;

	// multiple
	otherNames: AudienceStatusMultiple;
	familyMembers: AudienceStatusMultiple;
	socialLinks: AudienceStatusMultiple;
	websites: AudienceStatusMultiple;
	work: AudienceStatusMultiple;
	education: AudienceStatusMultiple;
	placesLived: AudienceStatusMultiple;
}

type AllKeys<T> = keyof T | `${Extract<keyof T, string>}.${string}`;

export type AudienceFormFields = AllKeys<AudienceSettings>;

export interface FormFieldsWithAudience<T> {
	audience: AudienceStatusOptions;
	values: T | undefined;
}
