import Icon from "@mdi/react";
import { mdiClose } from "@mdi/js";

import useErrorPopup from "./useErrorPopup";
import {
	ProgressBar,
	StyledButton,
	StyledDialog,
	StyledErrorText,
} from "./ErrorPopup.styles";

const ErrorPopup = () => {
	const { ref, closePopup, renderErrorMessage } = useErrorPopup();

	return (
		<StyledDialog open ref={ref}>
			<StyledButton onClick={closePopup}>
				<Icon path={mdiClose} size={0.9} color={"black"} />
			</StyledButton>
			<StyledErrorText>{renderErrorMessage()}</StyledErrorText>
			<ProgressBar>
				<div></div>
			</ProgressBar>
		</StyledDialog>
	);
};

export default ErrorPopup;
