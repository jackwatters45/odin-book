import { IRelationshipStatus } from "@/types/IUser";

const capitalizeFirstLetter = (string: string) =>
	string.charAt(0).toUpperCase() + string.slice(1);

const formatRelationshipStatus = ({ partner, status }: IRelationshipStatus) => {
	const capitalizedStatus = capitalizeFirstLetter(status);
	return partner ? `${capitalizedStatus} with ${partner}` : capitalizedStatus;
};

export default formatRelationshipStatus;
