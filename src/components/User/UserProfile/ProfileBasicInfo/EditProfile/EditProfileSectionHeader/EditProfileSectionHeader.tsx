import { ReactNode } from "react";

import {
	EditProfileSectionHeaderContainer,
	StyledEditLink,
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
			<StyledEditLink onClick={openDialog} text={isData ? "Edit" : "Add"} />
			{children}
		</EditProfileSectionHeaderContainer>
	);
};

export default EditProfileSectionHeader;
