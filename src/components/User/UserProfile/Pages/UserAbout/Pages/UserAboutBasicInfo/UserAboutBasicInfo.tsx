import { BoldText, StyledUserAboutContainer } from "@/styles/SharedStyles";
import useUserAboutBasicInfo from "./useUserAboutBasicInfo";
import AboutEmail from "@/components/User/UserFields/Email";
import AboutPhoneNumber from "@/components/User/UserFields/PhoneNumber";
import AboutGender from "@/components/User/UserFields/Gender";
import AboutPronouns from "@/components/User/UserFields/Pronouns";
import AboutWebsite from "@/components/User/UserFields/Websites";
import AddWebsites from "@/components/User/UserFields/Websites/Add";
import AboutSocialLink from "@/components/User/UserFields/SocialLinks";
import AddSocialLinks from "@/components/User/UserFields/SocialLinks/Add";
import AboutLanguages from "@/components/User/UserFields/Languages";
import AboutBirthday from "@/components/User/UserFields/Birthday";
import encodeWebsiteId from "@/components/User/UserFields/Websites/utils/encodeWebsiteId";

import WebsitesPlaceholder from "@/components/User/UserFields/Websites/Placeholder/WebsitesPlaceholder";
import SocialLinksPlaceholder from "@/components/User/UserFields/SocialLinks/Placeholder/";

const UserAboutBasicInfo = () => {
	const { isOwnProfile, audienceSettings, user } = useUserAboutBasicInfo();

	return (
		<StyledUserAboutContainer>
			<StyledUserAboutContainer>
				<BoldText>Contact info</BoldText>
				<AboutPhoneNumber
					phoneNumber={user?.phoneNumber}
					audience={audienceSettings?.phoneNumber}
				/>
				<AboutEmail email={user?.email} audience={audienceSettings?.email} />
			</StyledUserAboutContainer>
			<StyledUserAboutContainer>
				<BoldText>Websites and social links</BoldText>
				{isOwnProfile && <AddWebsites />}
				{user?.websites && user.websites.length > 0 ? (
					user?.websites?.map((website) => (
						<AboutWebsite
							key={website}
							website={website}
							audience={audienceSettings?.websites?.[website] ?? "Public"}
							category={`websites.${encodeWebsiteId(website)}`}
							includeAddDetailLink={false}
						/>
					))
				) : (
					<WebsitesPlaceholder />
				)}
				{isOwnProfile && <AddSocialLinks />}
				{user?.socialLinks && user.socialLinks.length > 0 ? (
					user?.socialLinks?.map((socialLink) => (
						<AboutSocialLink
							key={socialLink._id}
							socialLink={socialLink}
							audience={audienceSettings?.socialLinks?.[socialLink._id]}
							category={`socialLinks.${socialLink._id}`}
							includeAddDetailLink={false}
						/>
					))
				) : (
					<SocialLinksPlaceholder />
				)}
			</StyledUserAboutContainer>
			<StyledUserAboutContainer>
				<BoldText>Basic info</BoldText>
				<AboutGender gender={user?.gender} audience={audienceSettings?.gender} />
				<AboutPronouns pronouns={user?.pronouns} audience={audienceSettings?.pronouns} />
				<AboutBirthday birthday={user?.birthday} audience={audienceSettings?.birthday} />
				<AboutLanguages
					languages={user?.languages}
					audience={audienceSettings?.languages}
				/>
			</StyledUserAboutContainer>
		</StyledUserAboutContainer>
	);
};

export default UserAboutBasicInfo;
