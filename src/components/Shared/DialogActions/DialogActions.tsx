import { ReactNode } from "react";

import useDialogActions from "./useDialogActions";
import { BottomDiv, PlaceholderDiv, StyledButtonDiv } from "@/styles/SharedStyles";
import { StyledCancelButton, StyledSaveButton } from "./DialogActions.styles.";

interface DialogActionsProps<T> {
	initial: T | undefined;
	unsavedValue: T | undefined;

	closeDialog: () => void;
	handleSave: (() => void) | undefined; // undefined if using a form

	leftColumn?: ReactNode;
	submitButtonText?: string;
	unchangedBehavior?: "hide" | "disable" | "default";
}

const DialogActions = <T,>({
	initial,
	unsavedValue,
	closeDialog,
	handleSave,
	leftColumn,
	submitButtonText = "Save",
	unchangedBehavior = "default",
}: DialogActionsProps<T>) => {
	const { isChanged } = useDialogActions<T>({
		initial,
		unsavedValue,
	});

	return (
		<BottomDiv $border={true}>
			{leftColumn ? leftColumn : <PlaceholderDiv />}
			{!(unchangedBehavior === "hide" && !isChanged) ? (
				<StyledButtonDiv>
					<StyledCancelButton onClick={closeDialog} type="button">
						Cancel
					</StyledCancelButton>
					<StyledSaveButton
						type={handleSave ? "button" : "submit"}
						onClick={handleSave}
						disabled={unchangedBehavior === "disable" && !isChanged}
					>
						{submitButtonText}
					</StyledSaveButton>
				</StyledButtonDiv>
			) : null}
		</BottomDiv>
	);
};

export default DialogActions;
