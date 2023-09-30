import { FC } from "react";
import { mdiMapMarker } from "@mdi/js";

import AudienceStatusOptions from "@/types/AudienceStatusOptions";
import UserAboutOverviewItem from "../../../../Shared/USER/UserAboutOverviewItem";
import { PlaceLivedData, UserAboutAudienceFormFields } from "@/types/IUser";

import PlacesLivedUserOverviewForm from "../UserOverviewForms/PlacesLivedUserOverviewForm";
import useAboutOverviewPlacesLived from "./useAboutOverviewPlacesLived";

interface AboutOverviewHometownProps {
	placeLived: PlaceLivedData | undefined;
	audience: AudienceStatusOptions;
	category: UserAboutAudienceFormFields;
	categoryDisplayName?: string;
	categoryUrl?: string;
	titlePrefix?: string;
	subtitle?: string;
	includeAddDetailLink?: boolean;

	FormComponent?: FC<{
		audience: AudienceStatusOptions;
		handleCloseForm: () => void;
		initialValues: PlaceLivedData | undefined;
		category: UserAboutAudienceFormFields;
		url?: string;
	}>;
}

const AboutOverviewPlacesLived = ({
	placeLived,
	audience,
	category,
	categoryDisplayName = category,
	categoryUrl = "places-lived",
	titlePrefix,
	subtitle,
	includeAddDetailLink = true,

	FormComponent = PlacesLivedUserOverviewForm,
}: AboutOverviewHometownProps) => {
	const {
		title,
		defaultSubtitle,
		isEditing,
		handleOpenForm,
		handleCloseForm,
		deleteMutation,
	} = useAboutOverviewPlacesLived({
		categoryUrl,
		placeLived,
		titlePrefix,
	});

	return (
		<UserAboutOverviewItem
			title={title}
			category={category}
			categoryDisplayName={categoryDisplayName}
			audience={audience}
			icon={mdiMapMarker}
			subtitle={subtitle || defaultSubtitle}
			addText={`Add ${categoryDisplayName} to profile`}
			isEditing={isEditing}
			handleOpenForm={handleOpenForm}
			deleteMutation={deleteMutation}
			includeAddDetailLink={includeAddDetailLink}
			itemId={placeLived?._id}
			FormComponent={
				<FormComponent
					audience={audience}
					handleCloseForm={handleCloseForm}
					initialValues={placeLived}
					category={category}
					url={categoryUrl}
				/>
			}
		/>
	);
};

export default AboutOverviewPlacesLived;
