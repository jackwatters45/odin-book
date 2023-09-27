import AddDetailLink from "@/components/User/UserFields/Details/EditDetailsForm/AddDetailLink";
import { ReactNode } from "react";

interface EmptyUserAboutItemProps {
	isEditing: boolean;
	handleOpenForm: () => void;
	FormComponent: ReactNode;
	fieldName: string;
}

const EmptyUserAboutItem = ({
	isEditing,
	handleOpenForm,
	FormComponent,
	fieldName,
}: EmptyUserAboutItemProps) => {
	return isEditing ? (
		FormComponent
	) : (
		<AddDetailLink text={`Add ${fieldName}`} onClick={handleOpenForm} />
	);
};

export default EmptyUserAboutItem;
