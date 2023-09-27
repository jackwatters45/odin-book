import formatRelationshipStatus from "@/components/User/UserFields/RelationshipStatus/formatRelationshipStatus";
import useUserAboutOverviewItem from "../../UserAboutOverviewItem/useUserAboutOverviewItem";
import { IUser } from "@/types/IUser";
import { IRelationshipStatus } from "@/types/IRelationshipStatus";

interface AboutOverviewRelationshipProps {
	relationship: IRelationshipStatus | undefined;
}

const useAboutOverviewRelationship = ({
	relationship,
}: AboutOverviewRelationshipProps) => {
	const partner = relationship?.partner as IUser;

	const relationshipPretext =
		relationship?.status &&
		formatRelationshipStatus({
			status: relationship?.status,
			partner,
			includePartner: false,
		});

	const relationshipPretextFormatted = `${relationshipPretext} `;

	const { isEditing, handleOpenForm, handleCloseForm } = useUserAboutOverviewItem({
		categoryUrl: "relationship",
	});

	return {
		partner,
		relationshipPretextFormatted,
		isEditing,
		handleOpenForm,
		handleCloseForm,
	};
};

export default useAboutOverviewRelationship;
