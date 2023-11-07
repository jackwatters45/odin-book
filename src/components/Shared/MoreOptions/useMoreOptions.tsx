import useDialog from "@/hooks/useDialog";
import { useLayoutEffect, useState } from "react";

interface UseMoreOptionsProps {
	deleteMutation: (() => void) | undefined;
}

const useMoreOptions = ({ deleteMutation }: UseMoreOptionsProps) => {
	const { ref, openDialog, closeDialog, isOpen, isOverflowLeft, isOverflowRight } =
		useDialog({
			isModal: false,
		});

	const [dialogDirection, setDialogDirection] = useState<"left" | "right" | undefined>(
		"left",
	);

	useLayoutEffect(() => {
		if (isOverflowLeft && !isOverflowRight) {
			setDialogDirection("right");
		}

		if (isOverflowRight && !isOverflowLeft) {
			setDialogDirection("left");
		}
	}, [isOverflowLeft, isOverflowRight]);

	const handleDelete = () => {
		deleteMutation?.();
		closeDialog();
	};

	return {
		ref,
		openDialog,
		closeDialog,
		handleDelete,
		isOpen,
		dialogDirection,
	};
};

export default useMoreOptions;
