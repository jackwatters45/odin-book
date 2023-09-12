import { Control, FieldValues, Path, PathValue, UseFormSetValue } from "react-hook-form";
import { lazy } from "react";

import { StyledRadioFormDialog } from "./RadioForm.styles";
import useRadioForm from "./useRadioForm";
import RadioFormController from "./RadioFormController";
import RadioFormDialogContent from "./DialogContent/RadioFormDialogContent";

const DialogActions = lazy(() => import("../DialogActions"));
const ModalHeader = lazy(() => import("../DialogHeader"));

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
	const {
		ref,
		openDialog,
		closeDialog,
		popupValue,
		setPopupValue,
		handleConfirm,
		LazyWrapper,
	} = useRadioForm({
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
			<LazyWrapper>
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
			</LazyWrapper>
		</>
	);
};

export default RadioForm;
