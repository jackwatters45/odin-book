import { Control, FieldValues, Path, PathValue, UseFormSetValue } from "react-hook-form";

import useRadioForm from "./useRadioForm";
import RadioFormDialogContent from "./DialogContent";
import { StyledRadioFormDialog } from "./RadioForm.styles";
import DialogActions from "../DialogActions";
import ModalHeader from "../DialogHeader";
import RadioFormController from "./RadioFormController";

export interface RadioFormOption {
	title: string;
	icon: string;
	subtitle?: string;
}

interface RadioFormProps<T extends FieldValues> {
	title: string;
	options: RadioFormOption[];
	formField: Path<T> & string;
	initial: PathValue<T, Path<T>> & string;
	control: Control<T>;
	setValue: UseFormSetValue<T>;
}

const RadioForm = <T extends FieldValues>({
	title,
	formField,
	options,
	initial,
	control,
	setValue,
}: RadioFormProps<T>) => {
	const { ref, openDialog, closeDialog, popupValue, setPopupValue, handleConfirm } =
		useRadioForm({
			setValue,
			formField,
			initial,
		});

	return (
		<>
			<RadioFormController<T>
				formField={formField}
				control={control}
				openDialog={openDialog}
				options={options}
				initial={initial}
			/>
			<StyledRadioFormDialog ref={ref} id={formField}>
				<ModalHeader title={title} closeDialog={closeDialog} />
				<RadioFormDialogContent<T>
					options={options}
					formField={formField}
					popupValue={popupValue}
					setPopupValue={setPopupValue}
				/>
				<DialogActions
					initial={initial}
					unsavedValue={popupValue}
					closeDialog={closeDialog}
					handleSave={handleConfirm}
				/>
			</StyledRadioFormDialog>
		</>
	);
};

export default RadioForm;
