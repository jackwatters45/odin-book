import Icon from "@mdi/react";
import { mdiClose } from "@mdi/js";

import useErrorPopup from "./useErrorPopup";
import renderFormErrors from "../../../utils/renderFormErrors";
import { FormError } from "../../../../types/ErrorInterfaces";
import {
	ProgressBar,
	StyledButton,
	StyledDialog,
	StyledErrorText,
} from "./ErrorPopup.styles";

interface Props {
	error?: FormError;
}

const ErrorPopup = ({ error }: Props) => {
	const { ref, closePopup } = useErrorPopup(error);

	return (
		<StyledDialog open ref={ref}>
			<StyledButton onClick={closePopup}>
				<Icon path={mdiClose} size={0.9} color={"black"} />
			</StyledButton>
			<StyledErrorText>
				{error ? renderFormErrors(error) : "An unexpected error has occurred."}
			</StyledErrorText>
			<ProgressBar>
				<div></div>
			</ProgressBar>
		</StyledDialog>
	);
};

export default ErrorPopup;
