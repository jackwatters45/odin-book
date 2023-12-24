import {
	mdiGithub,
	mdiInstagram,
	mdiLinkedin,
	mdiSnapchat,
	mdiSpotify,
	mdiTwitter,
	mdiWhatsapp,
	mdiYoutube,
} from "@mdi/js";
import { ValidSocialPlatformsType } from "../types/SocialLinksTypes";

const socialLinkImages: Record<ValidSocialPlatformsType, string> = {
	twitter: mdiTwitter,
	instagram: mdiInstagram,
	linkedin: mdiLinkedin,
	youtube: mdiYoutube,
	github: mdiGithub,
	snapchat: mdiSnapchat,
	whatsapp: mdiWhatsapp,
	spotify: mdiSpotify,
};

const getSocialLinkImage = (socialLink: ValidSocialPlatformsType) => {
	return socialLinkImages[socialLink];
};

export default getSocialLinkImage;
