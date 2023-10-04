import { mdiHeart } from "@mdi/js";

import UserAboutOverviewItem from "../../../Shared/UserAboutOverviewItem";
import { IRelationshipStatus } from "@/components/User/UserFields/RelationshipStatus/types/RelationshipTypes";
import { AudienceStatusOptions } from "@/types/AudienceSettingsTypes";
import RelationshipUserOverviewForm from "./Form/RelationshipForm";
import useRelationship from "./useRelationship";

interface RelationshipProps {
	relationship: IRelationshipStatus | undefined;
	audience: AudienceStatusOptions;
}

const Relationship = ({ relationship, audience }: RelationshipProps) => {
	const {
		partner,
		relationshipPretextFormatted,
		isEditing,
		handleOpenForm,
		handleCloseForm,
	} = useRelationship({ relationship });

	return (
		<UserAboutOverviewItem
			title={
				relationship?.status
					? [
							{ type: "text", content: relationshipPretextFormatted },
							{
								type: "link",
								content: partner?.fullName,
								linkTo: `/user/${partner?._id}`,
							},
					  ]
					: null
			}
			category="relationshipStatus"
			categoryDisplayName="relationship status"
			audience={audience}
			icon={mdiHeart}
			addText={"Add relationship to profile"}
			isEditing={isEditing}
			handleOpenForm={handleOpenForm}
			deleteMutation={undefined}
			FormComponent={
				<RelationshipUserOverviewForm
					audience={audience}
					handleCloseForm={handleCloseForm}
					initialValues={relationship}
				/>
			}
		/>
	);
};

export default Relationship;
