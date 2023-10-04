import UserAboutOverviewItem from "../../../Shared/UserAboutOverviewItem";
import useUserAboutOverviewItem from "../../../Shared/UserAboutOverviewItem/useUserAboutOverviewItem";
import { AudienceStatusOptions, AudienceFormFields } from "@/types/AudienceSettingsTypes";
import SocialLinksForm from "./Form";
import getSocialLinkImage from "./utils/socialLinkImages";
import { ISocialLinks } from "./types/SocialLinksTypes";

interface SocialLinksProps {
	socialLink: ISocialLinks | undefined;
	audience: AudienceStatusOptions;
	includeAddDetailLink?: boolean;
	category: AudienceFormFields;
}

const SocialLinks = ({
	socialLink,
	audience,
	includeAddDetailLink = true,
	category,
}: SocialLinksProps) => {
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
			icon={getSocialLinkImage(socialLink?.platform as ISocialLinks["platform"])}
			addText={"Add social link to profile"}
			isEditing={isEditing}
			handleOpenForm={handleOpenForm}
			deleteMutation={deleteMutation}
			includeAddDetailLink={includeAddDetailLink}
			FormComponent={
				<SocialLinksForm
					audience={audience}
					initialValues={socialLink}
					handleCloseForm={handleCloseForm}
					category={category}
				/>
			}
		/>
	);
};

export default SocialLinks;
