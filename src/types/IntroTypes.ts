import { AudienceStatusOptions } from "./AudienceSettingsTypes";

export type IntroField = Record<string, boolean>;
export type IntroFieldAudience = Record<string, AudienceStatusOptions>;

export interface IntroData {
	pronouns: IntroField;
	work: IntroField;
	education: IntroField;
	currentCity: IntroField;
	hometown: IntroField;
	relationshipStatus: IntroField;
	namePronunciation: IntroField;
	joined: IntroField;
	websites: IntroFieldAudience;
	socialLinks: IntroFieldAudience;
}
