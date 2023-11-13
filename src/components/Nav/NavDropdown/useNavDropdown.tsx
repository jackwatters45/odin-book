import useDialog from "@/hooks/useDialog";
import { useLayoutEffect, useState } from "react";

const useNavDropdown = () => {
	const { ref, openDialog, closeDialog, isOpen, isOverflowLeft, isOverflowRight } =
		useDialog({
			isModal: false,
		});

	const [dialogDirection, setDialogDirection] = useState<"left" | "right" | undefined>(
		"left",
	);

	useLayoutEffect(() => {
		if (isOverflowLeft && !isOverflowRight) setDialogDirection("right");
		if (isOverflowRight && !isOverflowLeft) setDialogDirection("left");
	}, [isOverflowLeft, isOverflowRight]);

	return {
		ref,
		openDialog,
		closeDialog,
		isOpen,
		dialogDirection,
	};
};

export default useNavDropdown;
