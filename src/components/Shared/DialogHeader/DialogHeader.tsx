import { mdiArrowLeft, mdiClose } from "@mdi/js";
import Icon from "@mdi/react";

import {
	HeaderDiv,
	StyledDialogBackButton,
	StyledDialogCloseButton,
} from "./DialogHeader.styles";
import { HTMLAttributes } from "react";

interface DialogHeaderProps extends HTMLAttributes<HTMLDivElement> {
	title: string;
	closeDialog: () => void;
	buttonActionType?: "back" | "close";
}

const DialogHeader = ({
	title,
	closeDialog,
	buttonActionType = "close",
	...props
}: DialogHeaderProps) => {
	return (
		<HeaderDiv {...props}>
			{buttonActionType === "back" && (
				<StyledDialogBackButton onClick={closeDialog} type="button">
					<Icon path={mdiArrowLeft} size={1.1} color={"#65676B"} />
				</StyledDialogBackButton>
			)}
			<h2>{title}</h2>
			{buttonActionType === "close" && (
				<StyledDialogCloseButton onClick={closeDialog} type="button">
					<Icon path={mdiClose} size={1.1} color={"#65676B"} />
				</StyledDialogCloseButton>
			)}
		</HeaderDiv>
	);
};

export default DialogHeader;
