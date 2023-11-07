import { useCallback, useLayoutEffect, useRef, useState } from "react";

interface UseDialogProps {
	isModal?: boolean;
	isOpenByDefault?: boolean;
	reset?: () => void;
}

const useDialog = ({
	isModal = true,
	isOpenByDefault = false,
	reset,
}: UseDialogProps) => {
	const ref = useRef<HTMLDialogElement>(null);

	const [isOpen, setIsOpen] = useState(false);

	const [isOverflowLeft, setIsOverflowLeft] = useState(false);
	const [isOverflowRight, setIsOverflowRight] = useState(false);
	const [isOverflowTop, setIsOverflowTop] = useState(false);
	const [isOverflowBottom, setIsOverflowBottom] = useState(false);

	const closeDialog = useCallback(() => {
		ref.current?.close();
		setIsOpen(false);
	}, []);

	useLayoutEffect(() => {
		const handleClickOutside = (e: MouseEvent) => {
			if (ref.current && !ref.current.contains(e.target as Node)) {
				closeDialog();
				setIsOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, [closeDialog, isOpen]);

	const openDialog = useCallback(() => {
		if (reset) reset();

		setIsOpen(true);

		setTimeout(() => (isModal ? ref.current?.showModal() : ref.current?.show()), 0);

		const positionDialog = () =>
			setTimeout(() => {
				const rect = ref.current?.getBoundingClientRect();

				const parentDialog = ref.current?.parentElement?.closest("dialog");
				const parentDialogRect = parentDialog?.getBoundingClientRect();

				// Right overflow
				const rightBoundaryElement = rect?.right || 0;
				const rightBoundaryParent = parentDialogRect?.right || window.innerWidth;
				setIsOverflowRight(rightBoundaryElement > rightBoundaryParent);

				// Left overflow
				const leftBoundaryElement = rect?.left || 0;
				const leftBoundaryParent = parentDialogRect?.left || 0;
				setIsOverflowLeft(leftBoundaryElement < leftBoundaryParent);

				// Bottom overflow
				const bottomBoundaryElement = rect?.bottom || 0;
				const bottomBoundaryParent = parentDialogRect?.bottom || window.innerHeight;
				setIsOverflowBottom(bottomBoundaryElement > bottomBoundaryParent);

				// Top overflow
				const topBoundaryElement = rect?.top || 0;
				const topBoundaryParent = parentDialogRect?.top || 0;
				setIsOverflowTop(topBoundaryElement < topBoundaryParent);
			}, 0);
		positionDialog();
	}, [isModal, reset]);

	useLayoutEffect(() => {
		if (isOpenByDefault) openDialog();
	}, [isOpenByDefault, openDialog]);

	return {
		ref,
		openDialog,
		closeDialog,
		isOpen,
		setIsOpen,
		isOverflowLeft,
		isOverflowRight,
		isOverflowTop,
		isOverflowBottom,
	};
};

export default useDialog;
