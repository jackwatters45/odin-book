import { mdiClose } from "@mdi/js";
import Icon from "@mdi/react";

import { HeaderDiv, StyledDialogCloseButton } from "./DialogHeader.styles";

interface DialogHeaderProps {
	title: string;
	closeDialog: () => void;
}

const DialogHeader = ({ title, closeDialog }: DialogHeaderProps) => {
	return (
		<HeaderDiv>
			<h2>{title}</h2>
			<StyledDialogCloseButton onClick={closeDialog} type="button">
				<Icon path={mdiClose} size={1.1} color={"#65676B"} />
			</StyledDialogCloseButton>
		</HeaderDiv>
	);
};

export default DialogHeader;
