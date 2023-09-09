import AudienceStatusOptions from "./AudienceStatusOptions";

type DetailsFormFields = {
	pronouns: Record<string, boolean> | undefined;
	work: Record<string, boolean> | undefined;
	education: Record<string, boolean> | undefined;
	currentCity: Record<string, boolean> | undefined;
	hometown: Record<string, boolean> | undefined;
	relationshipStatus: Record<string, boolean> | undefined;
	namePronunciation: Record<string, boolean> | undefined;
	joined: Record<string, boolean> | undefined;
	websites: Record<string, AudienceStatusOptions> | undefined;
	socialLinks: Record<string, AudienceStatusOptions> | undefined;
};

export default DetailsFormFields;
