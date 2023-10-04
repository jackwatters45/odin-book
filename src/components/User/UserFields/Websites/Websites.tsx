import { mdiWeb } from "@mdi/js";
import UserAboutOverviewItem from "../../../Shared/UserAboutOverviewItem";
import useUserAboutOverviewItem from "../../../Shared/UserAboutOverviewItem/useUserAboutOverviewItem";
import { AudienceFormFields, AudienceStatusOptions } from "@/types/AudienceSettingsTypes";
import WebsitesForm from "./Form";

interface WebsitesProps {
	website: string | undefined;
	audience: AudienceStatusOptions;
	category: AudienceFormFields;
	includeAddDetailLink?: boolean;
}

const Websites = ({
	website,
	audience,
	category,
	includeAddDetailLink = true,
}: WebsitesProps) => {
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
				<WebsitesForm
					audience={audience}
					initialValues={website}
					category={category}
					handleCloseForm={handleCloseForm}
				/>
			}
		/>
	);
};

export default Websites;
