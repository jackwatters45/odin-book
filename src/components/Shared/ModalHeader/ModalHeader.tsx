import { mdiClose } from "@mdi/js";
import Icon from "@mdi/react";

import { HeaderDiv, StyledModalCloseButton } from "./ModalHeader.styles";

interface ModalHeaderProps {
	title: string;
	closeDialog: () => void;
}

const ModalHeader = ({ title, closeDialog }: ModalHeaderProps) => {
	return (
		<HeaderDiv>
			<h2>{title}</h2>
			<StyledModalCloseButton onClick={closeDialog}>
				<Icon path={mdiClose} size={1.2} color={"black"} />
			</StyledModalCloseButton>
		</HeaderDiv>
	);
};

export default ModalHeader;
