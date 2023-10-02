import capitalizeFirstLetterString from "@/utils/capitalizeFirstLetterString";
import getRelationshipStatusPreposition from "./relationshipStatusPrepositions";
import { IRelationshipStatus } from "@/components/User/UserFields/RelationshipStatus/types/IRelationshipStatus";
import { IUser } from "@/types/IUser";

interface IRelationshipStatusProps {
	status: IRelationshipStatus["status"];
	partner?: IUser;
	includePartner?: boolean;
}

const formatRelationshipStatus = ({
	partner,
	status,
	includePartner = true,
}: IRelationshipStatusProps) => {
	const capitalizedStatus = capitalizeFirstLetterString(status);
	const preposition = getRelationshipStatusPreposition(status);

	if (includePartner && partner) {
		return `${capitalizedStatus} ${preposition} ${partner.fullName}`;
	} else if (!includePartner && partner) {
		return `${capitalizedStatus} ${preposition} `;
	} else return capitalizedStatus;
};

export default formatRelationshipStatus;
