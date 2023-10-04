export const VALID_SOCIAL_PLATFORMS_ARRAY = [
	"twitter",
	"instagram",
	"linkedin",
	"youtube",
	"github",
	"snapchat",
	"spotify",
	"whatsapp",
] as const;

export type ValidSocialPlatformsType = (typeof VALID_SOCIAL_PLATFORMS_ARRAY)[number];

export interface ISocialLinks {
	_id: string;
	platform: ValidSocialPlatformsType;
	username: string;
}
