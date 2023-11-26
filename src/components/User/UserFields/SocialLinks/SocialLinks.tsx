import UserAboutOverviewItem from "../../Shared/SingleUserProperty";
import useUserAboutOverviewItem from "../../Shared/SingleUserProperty/useSingleUserProperty";
import { AudienceStatusOptions, AudienceFormFields } from "@/types/AudienceSettingsTypes";
import SocialLinksForm from "./Form";
import getSocialLinkImage from "./utils/socialLinkImages";
import { ISocialLinks } from "./types/SocialLinksTypes";
import SocialLinksPlaceholder from "./Placeholder/SocialLinksPlaceholder";

interface SocialLinksProps {
	socialLink: ISocialLinks | undefined;
	audience: AudienceStatusOptions;
	category: AudienceFormFields;
	includeAddDetailLink?: boolean;
}

const SocialLinks = ({
	socialLink,
	audience,
	category,
	includeAddDetailLink = true,
}: SocialLinksProps) => {
	const { isEditing, handleOpenForm, handleCloseForm, deleteMutation } =
		useUserAboutOverviewItem({ categoryUrl: "social-links", param: socialLink?._id });

	return (
		<UserAboutOverviewItem
			title={
				socialLink
					? [
							{
								type: "text",
								content: socialLink.username,
								style: { wordBreak: "break-all" },
							},
					  ]
					: null
			}
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
			PlaceholderComponent={<SocialLinksPlaceholder />}
		/>
	);
};

export default SocialLinks;
