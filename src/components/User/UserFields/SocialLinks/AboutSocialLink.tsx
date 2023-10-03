import UserAboutOverviewItem from "../../../Shared/UserAboutOverviewItem";
import useUserAboutOverviewItem from "../../../Shared/UserAboutOverviewItem/useUserAboutOverviewItem";
import AudienceStatusOptions from "@/types/AudienceStatusOptions";
import AboutSocialLinksForm from "./form";
import { SocialLinksData, UserAboutAudienceFormFields } from "@/types/IUser";
import getSocialLinkImage from "./utils/socialLinkImages";

interface AboutSocialLinkProps {
	socialLink: SocialLinksData | undefined;
	audience: AudienceStatusOptions;
	includeAddDetailLink?: boolean;
	category: UserAboutAudienceFormFields;
}

const AboutSocialLink = ({
	socialLink,
	audience,
	includeAddDetailLink = true,
	category,
}: AboutSocialLinkProps) => {
	const { isEditing, handleOpenForm, handleCloseForm, deleteMutation } =
		useUserAboutOverviewItem({ categoryUrl: "social-links", param: socialLink?._id });

	return (
		<UserAboutOverviewItem
			title={socialLink ? [{ type: "text", content: socialLink.username }] : null}
			itemId={socialLink?._id}
			category={category}
			categoryDisplayName="social link"
			subtitle={socialLink ? socialLink.platform : null}
			audience={audience}
			icon={getSocialLinkImage(socialLink?.platform as SocialLinksData["platform"])}
			addText={"Add social link to profile"}
			isEditing={isEditing}
			handleOpenForm={handleOpenForm}
			deleteMutation={deleteMutation}
			includeAddDetailLink={includeAddDetailLink}
			FormComponent={
				<AboutSocialLinksForm
					audience={audience}
					initialValues={socialLink}
					handleCloseForm={handleCloseForm}
					category={category}
				/>
			}
		/>
	);
};

export default AboutSocialLink;
