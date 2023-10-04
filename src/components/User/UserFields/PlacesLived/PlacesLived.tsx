import { FC } from "react";
import { mdiMapMarker } from "@mdi/js";

import { AudienceStatusOptions, AudienceFormFields } from "@/types/AudienceSettingsTypes";
import UserAboutOverviewItem from "../../Shared/UserAboutOverviewItem";

import PlacesLivedUserOverviewForm from "./Form";
import usePlacesLived from "./usePlacesLived";
import { IPlaceLived } from "./types/PlacesLivedTypes";

type PlacesLivedFormProps = {
	audience: AudienceStatusOptions;
	handleCloseForm: () => void;
	initialValues: IPlaceLived | undefined;
	category: AudienceFormFields;
	url?: string;
};

interface AboutOverviewHometownProps {
	placeLived: IPlaceLived | undefined;
	audience: AudienceStatusOptions;
	category: AudienceFormFields;
	categoryDisplayName?: string;
	categoryUrl?: string;
	titlePrefix?: string;
	subtitle?: string;
	includeAddDetailLink?: boolean;

	FormComponent?: FC<PlacesLivedFormProps>;
}

const PlacesLived = ({
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
	} = usePlacesLived({
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

export default PlacesLived;
