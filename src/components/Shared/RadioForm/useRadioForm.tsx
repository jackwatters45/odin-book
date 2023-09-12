import useDialog from "@/hooks/useDialog";
import { FieldValues, Path, PathValue, UseFormSetValue } from "react-hook-form";
import { useState } from "react";

interface UseRadioFormProps<T extends FieldValues> {
	formField: Path<T>;
	initial: PathValue<T, Path<T>>;
	setValue: UseFormSetValue<T>;
}

const useRadioForm = <T extends FieldValues>({
	formField,
	initial,
	setValue,
}: UseRadioFormProps<T>) => {
	const { ref, openDialog, closeDialog, LazyWrapper } = useDialog({});

	const [popupValue, setPopupValue] = useState<PathValue<T, Path<T>>>(initial);

	const handleConfirm = () => {
		setValue(formField, popupValue);
		closeDialog();
	};

	return {
		ref,
		openDialog,
		closeDialog,
		LazyWrapper,
		popupValue,
		setPopupValue,
		handleConfirm,
	};
};

export default useRadioForm;
