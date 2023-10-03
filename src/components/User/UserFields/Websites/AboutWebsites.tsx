import { mdiWeb } from "@mdi/js";
import UserAboutOverviewItem from "../../../Shared/UserAboutOverviewItem";
import useUserAboutOverviewItem from "../../../Shared/UserAboutOverviewItem/useUserAboutOverviewItem";
import AudienceStatusOptions from "@/types/AudienceStatusOptions";
import AboutWebsitesForm from "./form/AboutWebsitesForm";
import { UserAboutAudienceFormFields } from "@/types/IUser";

interface AboutWebsiteProps {
	website: string | undefined;
	audience: AudienceStatusOptions;
	category: UserAboutAudienceFormFields;
	includeAddDetailLink?: boolean;
}

const AboutWebsite = ({
	website,
	audience,
	category,
	includeAddDetailLink = true,
}: AboutWebsiteProps) => {
	const { isEditing, handleOpenForm, handleCloseForm, deleteMutation } =
		useUserAboutOverviewItem({
			categoryUrl: "websites",
			param: website ? encodeURIComponent(website) : undefined,
		});

	return (
		<UserAboutOverviewItem
			title={website ? [{ type: "text", content: website }] : null}
			category={category}
			categoryDisplayName="website"
			subtitle={website ? "Website" : null}
			audience={audience}
			icon={mdiWeb}
			addText={"Add website to profile"}
			isEditing={isEditing}
			handleOpenForm={handleOpenForm}
			deleteMutation={deleteMutation}
			itemId={website}
			includeAddDetailLink={includeAddDetailLink}
			FormComponent={
				<AboutWebsitesForm
					audience={audience}
					initialValues={website}
					category={category}
					handleCloseForm={handleCloseForm}
				/>
			}
		/>
	);
};

export default AboutWebsite;
