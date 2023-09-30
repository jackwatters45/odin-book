import useDialog from "@/hooks/useDialog";
import { FieldValues, Path, PathValue, UseFormSetValue } from "react-hook-form";
import { useState } from "react";

interface UseRadioFormProps<T extends FieldValues> {
	formField: Path<T>;
	initial: (PathValue<T, Path<T>> & string) | undefined;
	setValue: UseFormSetValue<T>;
}

const useRadioForm = <T extends FieldValues>({
	formField,
	initial,
	setValue,
}: UseRadioFormProps<T>) => {
	const [popupValue, setPopupValue] = useState<PathValue<T, Path<T>> | undefined>(
		initial,
	);

	const { ref, openDialog, closeDialog } = useDialog({});

	const resetPopupValue = () => setPopupValue(initial);
	const handleCancel = () => {
		resetPopupValue();
		closeDialog();
	};

	const handleConfirm = () => {
		const value = popupValue?.[formField] || popupValue;

		if (value) setValue(formField, value);

		closeDialog();
	};

	return {
		ref,
		openDialog,
		popupValue,
		setPopupValue,
		handleConfirm,
		handleCancel,
	};
};

export default useRadioForm;
