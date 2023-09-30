import { ReactNode } from "react";

import useDialogActions from "./useDialogActions";
import { BottomDiv, PlaceholderDiv, StyledButtonDiv } from "@/styles/SharedStyles";
import StandardButton from "../../StandardButton";

interface DialogActionsProps<T> {
	initial: T | undefined;
	unsavedValue: T | undefined;

	handleCancel: () => void;
	handleSave: (() => void) | undefined;
	disableSave?: boolean;
	className?: string;

	leftColumn?: ReactNode;
	submitButtonText?: string;
	unchangedBehavior?: "hide" | "disable" | "default";
	submitsForm?: boolean;
}

const DialogActions = <T,>({
	initial,
	unsavedValue,
	handleCancel,
	handleSave,
	disableSave = false,
	className,
	leftColumn,
	submitButtonText = "Save",
	unchangedBehavior = "default",
	submitsForm = true,
}: DialogActionsProps<T>) => {
	const { isChanged } = useDialogActions<T>({
		initial,
		unsavedValue,
	});

	return (
		<BottomDiv className={className} $border={true}>
			{leftColumn ? leftColumn : <PlaceholderDiv />}
			{!(unchangedBehavior === "hide" && (!isChanged || disableSave)) ? (
				<StyledButtonDiv>
					<StandardButton type="button" onClick={handleCancel} text="Cancel" />
					<StandardButton
						type={submitsForm ? "submit" : "button"}
						onClick={handleSave}
						disabled={unchangedBehavior === "disable" && (!isChanged || disableSave)}
						text={submitButtonText}
						colorClass="blue"
					/>
				</StyledButtonDiv>
			) : null}
		</BottomDiv>
	);
};

export default DialogActions;
