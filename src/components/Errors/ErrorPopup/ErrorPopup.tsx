import Icon from "@mdi/react";
import { mdiClose } from "@mdi/js";

import useErrorPopup from "./useErrorPopup";
import {
	ProgressBar,
	StyledButton,
	StyledErrorDialog,
	StyledErrorText,
} from "./ErrorPopup.styles";

const ErrorPopup = () => {
	const { ref, closePopup, renderErrorMessage } = useErrorPopup();

	return (
		<StyledErrorDialog open ref={ref}>
			<StyledButton onClick={closePopup}>
				<Icon path={mdiClose} size={0.9} color={"black"} />
			</StyledButton>
			<StyledErrorText>{renderErrorMessage()}</StyledErrorText>
			<ProgressBar>
				<div></div>
			</ProgressBar>
		</StyledErrorDialog>
	);
};

export default ErrorPopup;
