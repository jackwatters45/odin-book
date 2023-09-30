import { BoldText, StyledUserAboutContainer } from "@/styles/SharedStyles";
import useUserAboutBasicInfo from "./useUserAboutBasicInfo";
import AboutEmail from "@/components/User/UserFields/Email/AboutEmail";
import AboutPhoneNumber from "@/components/User/UserFields/PhoneNumber/AboutPhoneNumber";
import AboutGender from "@/components/User/UserFields/Gender/AboutGender";
import AboutPronouns from "@/components/User/UserFields/Pronouns/AboutPronouns";
import AboutWebsite from "@/components/User/UserFields/Websites/AboutWebsites";
import EmptyAboutWebsites from "@/components/User/UserFields/Websites/empty/EmptyAboutWebsites";
import AboutSocialLink from "@/components/User/UserFields/SocialLinks/AboutSocialLink";
import EmptyAboutSocialLinks from "@/components/User/UserFields/SocialLinks/empty/EmptyAboutSocialLinks";
import AboutLanguages from "@/components/User/UserFields/Languages/AboutLanguages";
import AboutBirthday from "@/components/User/UserFields/Birthday/AboutBirthday";
import encodeWebsiteId from "@/components/User/UserFields/Websites/utils/encodeWebsiteId";

const UserAboutBasicInfo = () => {
	const { audienceSettings, user } = useUserAboutBasicInfo();

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
				<EmptyAboutWebsites />
				{user?.websites?.map((website) => (
					<AboutWebsite
						key={website}
						website={website}
						audience={audienceSettings?.websites?.[website] ?? "Public"}
						category={`websites.${encodeWebsiteId(website)}`}
						includeAddDetailLink={false}
					/>
				))}
				<EmptyAboutSocialLinks />
				{user?.socialLinks?.map((socialLink) => (
					<AboutSocialLink
						key={socialLink._id}
						socialLink={socialLink}
						audience={audienceSettings?.socialLinks?.[socialLink._id]}
						category={`socialLinks.${socialLink._id}`}
						includeAddDetailLink={false}
					/>
				))}
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
