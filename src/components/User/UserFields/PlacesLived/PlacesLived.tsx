import { FC, ReactNode } from "react";

import { AudienceStatusOptions, AudienceFormFields } from "@/types/AudienceSettingsTypes";
import UserAboutOverviewItem from "../../Shared/SingleUserProperty";

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
	icon: string;
	PlaceholderComponent: ReactNode | undefined;
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
	icon,
	PlaceholderComponent,
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
			icon={icon}
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
			PlaceholderComponent={PlaceholderComponent}
		/>
	);
};

export default PlacesLived;
