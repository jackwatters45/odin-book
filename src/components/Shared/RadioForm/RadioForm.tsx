import { Control, FieldValues, Path, PathValue, UseFormSetValue } from "react-hook-form";
import { FC, Suspense, lazy } from "react";

import { StyledRadioFormDialog } from "./RadioForm.styles";
import useRadioForm from "./useRadioForm";

import RadioFormDialogContent from "./DialogContent/RadioFormDialogContent";
import RadioFormController from "./RadioFormController";
import { StandardButtonProps } from "../StandardButton/StandardButton";
import Loading from "../Loading";

const DialogActions = lazy(() => import("../DialogActions"));
const ModalHeader = lazy(() => import("../DialogHeader"));

export interface RadioFormOption {
	title: string;
	value: string;
	icon?: string;
	subtitle?: string;
}

export interface RadioFormCoreFormProps<T extends FieldValues> {
	formField: Path<T> & string;
	initial: PathValue<T, Path<T>> | undefined;
	control: Control<T>;
	setValue: UseFormSetValue<T>;
	buttonOptions?: StandardButtonProps;
	submitsForm: boolean;
	submitButtonText?: string;
	className?: string;
	valueIsObject?: boolean;

	ControllerComponent?: FC<{
		formField: Path<T> & string;
		control: Control<T>;
		openDialog: () => void;
		options: RadioFormOption[];
		buttonOptions?: StandardButtonProps;
	}>;
}

interface RadioFormUIProps {
	title: string;
	options: RadioFormOption[];
}

interface RadioFormProps<T extends FieldValues>
	extends RadioFormCoreFormProps<T>,
		RadioFormUIProps {}

const RadioForm = <T extends FieldValues>({
	title,
	formField,
	options,
	initial,
	control,
	setValue,
	buttonOptions,
	className,
	valueIsObject = false,
	submitsForm = true,
	submitButtonText,
	ControllerComponent = RadioFormController,
}: RadioFormProps<T>) => {
	const { ref, openDialog, popupValue, setPopupValue, handleConfirm, handleCancel } =
		useRadioForm({
			setValue,
			formField,
			initial,
			valueIsObject,
		});

	return (
		<>
			<ControllerComponent
				openDialog={openDialog}
				control={control}
				formField={formField}
				options={options}
				buttonOptions={buttonOptions}
			/>
			<StyledRadioFormDialog ref={ref} id={formField} className={className}>
				<Suspense fallback={<Loading />}>
					<ModalHeader title={title} closeDialog={handleCancel} />
					<RadioFormDialogContent<T>
						options={options}
						formField={formField}
						popupValue={popupValue}
						setPopupValue={setPopupValue}
					/>
					<DialogActions
						initial={initial}
						unsavedValue={popupValue}
						handleCancel={handleCancel}
						handleSave={handleConfirm}
						submitsForm={submitsForm}
						submitButtonText={submitButtonText}
					/>
				</Suspense>
			</StyledRadioFormDialog>
		</>
	);
};

export default RadioForm;
