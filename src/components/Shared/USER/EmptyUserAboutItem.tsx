import AddDetailLink from "@/components/User/UserFields/Details/EditDetailsForm/AddDetailLink";
import { ReactNode } from "react";

interface EmptyUserAboutItemProps {
	isEditing: boolean;
	handleOpenForm: () => void;
	FormComponent: ReactNode;
	buttonText: string;
}

const EmptyUserAboutItem = ({
	isEditing,
	handleOpenForm,
	FormComponent,
	buttonText,
}: EmptyUserAboutItemProps) => {
	return isEditing ? (
		FormComponent
	) : (
		<AddDetailLink text={`Add ${buttonText}`} onClick={handleOpenForm} />
	);
};

export default EmptyUserAboutItem;
