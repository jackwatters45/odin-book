import { ReactNode } from "react";

import {
	EditProfileSectionHeaderContainer,
	StyledEditButton,
} from "./EditProfileSectionHeader.styles";

interface EditProfileSectionHeaderProps {
	title: string;
	isData: boolean;
	openDialog: () => void;
	children?: ReactNode;
}

const EditProfileSectionHeader = ({
	title,
	isData,
	openDialog,
	children,
}: EditProfileSectionHeaderProps) => {
	return (
		<EditProfileSectionHeaderContainer>
			<h2>{title}</h2>
			<StyledEditButton onClick={openDialog}>{isData ? "Edit" : "Add"}</StyledEditButton>
			{children}
		</EditProfileSectionHeaderContainer>
	);
};

export default EditProfileSectionHeader;
