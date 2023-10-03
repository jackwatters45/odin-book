import formatRelationshipStatus from "@/components/User/UserFields/RelationshipStatus/utils/formatRelationshipStatus";
import useUserAboutOverviewItem from "../../../Shared/UserAboutOverviewItem/useUserAboutOverviewItem";
import { IUser } from "@/types/IUser";
import { IRelationshipStatus } from "@/components/User/UserFields/RelationshipStatus/types/IRelationshipStatus";

interface AboutOverviewRelationshipProps {
	relationship: IRelationshipStatus | undefined;
}

const useAboutOverviewRelationship = ({
	relationship,
}: AboutOverviewRelationshipProps) => {
	const { isEditing, handleOpenForm, handleCloseForm } = useUserAboutOverviewItem({
		categoryUrl: "relationship",
		param: undefined,
	});

	const partner = relationship?.user as IUser;
	const relationshipPretext =
		relationship?.status &&
		formatRelationshipStatus({
			status: relationship?.status,
			partner,
			includePartner: false,
		});

	const relationshipPretextFormatted = `${relationshipPretext} `;

	return {
		partner,
		relationshipPretextFormatted,
		isEditing,
		handleOpenForm,
		handleCloseForm,
	};
};

export default useAboutOverviewRelationship;
