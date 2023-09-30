import { ValidSocialPlatformsType } from "@/types/IUser";

const platformUrls = {
	twitter: "twitter.com/",
	instagram: "instagram.com/",
	linkedin: "linkedin.com/in/",
	youtube: "youtube.com/@",
	github: "github.com/",
	snapchat: false,
	whatsapp: false,
	spotify: false,
};

const getPlatformUrl = (platform: ValidSocialPlatformsType) => {
	return platformUrls[platform];
};

export default getPlatformUrl;
