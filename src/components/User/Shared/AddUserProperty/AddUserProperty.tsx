import AddDetailLink from "@/components/User/UserFields/Details/EditDetailsForm/AddDetailLink";
import { ReactNode } from "react";

interface AddUserPropertyProps {
	isEditing: boolean;
	handleOpenForm: () => void;
	FormComponent: ReactNode;
	buttonText: string;
}

const AddUserProperty = ({
	isEditing,
	handleOpenForm,
	FormComponent,
	buttonText,
}: AddUserPropertyProps) => {
	return isEditing ? (
		FormComponent
	) : (
		<AddDetailLink text={`Add ${buttonText}`} onClick={handleOpenForm} />
	);
};

export default AddUserProperty;
