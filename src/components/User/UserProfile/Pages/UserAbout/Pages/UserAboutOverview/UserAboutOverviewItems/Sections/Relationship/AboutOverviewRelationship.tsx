import { mdiHeart } from "@mdi/js";

import UserAboutOverviewItem from "../../../../../../../../../Shared/USER/UserAboutOverviewItem";
import { IRelationshipStatus } from "@/types/IRelationshipStatus";
import AudienceStatusOptions from "@/types/AudienceStatusOptions";
import RelationshipUserOverviewForm from "./form/RelationshipUserOverviewForm";
import useAboutOverviewRelationship from "./useAboutOverviewRelationship";

interface AboutOverviewRelationshipProps {
	relationship: IRelationshipStatus | undefined;
	audience: AudienceStatusOptions;
}

const AboutOverviewRelationship = ({
	relationship,
	audience,
}: AboutOverviewRelationshipProps) => {
	const {
		partner,
		relationshipPretextFormatted,
		isEditing,
		handleOpenForm,
		handleCloseForm,
	} = useAboutOverviewRelationship({ relationship });

	return (
		<UserAboutOverviewItem
			title={
				relationship?.status
					? [
							{ type: "text", content: relationshipPretextFormatted },
							{ type: "link", content: partner.fullName, linkTo: `/user/${partner._id}` },
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

export default AboutOverviewRelationship;
